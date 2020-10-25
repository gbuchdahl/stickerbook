from flask import Flask, render_template, request
from flask_basicauth import BasicAuth
from db import mongo, Classroom
from bson.json_util import dumps, loads

# user: user, pass: pass
def create_app():

    app = Flask(__name__)
    app.config[
        "MONGO_URI"
    ] = "mongodb+srv://user:pass@stickerbook.zqj1y.mongodb.net/stickerbook?retryWrites=true&w=majority"
    app.config["BASIC_AUTH_USERNAME"] = "codehaven"
    app.config["BASIC_AUTH_PASSWORD"] = "mrcashmoneyduan"
    mongo.init_app(app)
    return app


app = create_app()
basic_auth = BasicAuth(app)


@app.route("/")
def home():
    classroom = Classroom("test", "Mr. Colon", "Wednesday", "9am")
    print("Hello")
    classroom.add_team("Gabe", ["Jeremy", "Alex"])
    classrooms = mongo.db.classrooms.find({})
    return render_template("index.html", classrooms=classrooms)


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
    mongo.db.teams.update_one({"teamId": team_id}, {"$inc": {"stickers": 1}})
    return {}


@app.route("/teams/add", methods=["POST"])
def addTeam():
    print(loads(request.data))
    data = loads(request.data)
    mentor = data["mentorName"]
    team_name = data["teamName"]
    team_id = data["teamId"]
    class_code = data["classCode"]
    mongo.db.teams.insert_one(
        {
            "teamId": team_id,
            "mentor": mentor,
            "teamName": team_name,
            "classCode": class_code,
            "stickers": 0,
            "students": [],
        }
    )
    return {}
