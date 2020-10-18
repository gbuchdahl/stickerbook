from flask import Flask, render_template, request
from flask_basicauth import BasicAuth
from db import mongo, Classroom


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


@app.route("/admin", methods=["GET", "POST"])
@basic_auth.required
def admin():
    if request.method == "POST":
        # changeStickers(request.form["classCode"], request.form["amount"])
        for key, value in request.form.items():
            print(f"key: {key}, value: {value}")
        changeStickers
        print(request.form.get("classCode"))
        changeStickers(
            request.form.get("classCode"), int(request.form.get("amount")), mongo
        )

    classrooms = mongo.db.classrooms.find({})
    return render_template("admin.html", classrooms=classrooms)


@app.route("/class/<class_code>")
def classroomPage(class_code):
    classroom = mongo.db.classrooms.find_one_or_404({"classCode": class_code})
    return render_template(
        "classroom.html",
        class_info=classroom["classInfo"],
        stickers=classroom["stickers"],
    )
