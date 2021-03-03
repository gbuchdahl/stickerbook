from flask import Flask, render_template, request
from flask_basicauth import BasicAuth
from db import mongo, Classroom
from bson.json_util import dumps, loads
import os
import random

# user: user, pass: pass
def create_app():

    app = None
    if os.getenv("ENV") == "DEV":
        app = Flask(__name__)
    else:
        app = Flask(__name__, static_folder="../build", static_url_path="/")

    app.config[
        "MONGO_URI"
    ] = "mongodb+srv://user:pass@stickerbook.zqj1y.mongodb.net/stickerbook?retryWrites=true&w=majority"
    app.config["BASIC_AUTH_USERNAME"] = "user"
    app.config["BASIC_AUTH_PASSWORD"] = "pass"
    mongo.init_app(app)
    return app


app = create_app()
basic_auth = BasicAuth(app)


@app.route("/")
def index():
    return app.send_static_file("index.html")


@app.route("/classrooms")
def classrooms():
    classroom_json = []
    if mongo.db.classrooms.find({}):
        for cr in mongo.db.classrooms.find({}):
            classroom_json.append(
                {
                    "classLead": cr["classLead"],
                    "classInfo": cr["classInfo"],
                    "classCode": cr["classCode"],
                }
            )
    return dumps(classroom_json)


@app.route("/admin", methods=["GET", "POST"])
@basic_auth.required
def admin():
    return dumps({"auth": True})


@app.route("/teams/<class_code>")
def getTeams(class_code):
    teams = []
    if teams_res := mongo.db.teams.find({"classCode": class_code}):
        for team in teams_res:
            teams.append(
                {
                    "mentor": team["mentor"],
                    "teamName": team["teamName"],
                    "stickers": team["stickers"],
                    "students": team["students"],
                    "teamId": team["teamId"],
                }
            )

    return dumps(teams)


@app.route("/teams/update/<team_id>", methods=["POST"])
def updateTeam(team_id):
    data = loads(request.data)
    amount = data["amount"]
    mongo.db.teams.update_one({"teamId": team_id}, {"$inc": {"stickers": amount}})
    return {}


@app.route("/teams/add", methods=["POST"])
def addTeam():
    data = loads(request.data)
    mentor = data["mentorName"]
    team_name = data["teamName"]
    team_id = data["teamId"]
    class_code = data["classCode"]
    mongo.db.teams.insert_one(
        {
            "teamId": f'{team_id}-{random.randint(0, 100000)}',
            "mentor": mentor,
            "teamName": team_name,
            "classCode": class_code,
            "stickers": 0,
            "students": [],
        }
    )
    return {}


@app.route("/teams/delete", methods=["POST"])
def deleteTeam():
    data = loads(request.data)
    team_id = data["teamId"]
    mongo.db.teams.delete_one({"teamId": team_id})
