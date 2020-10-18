from typing import List
from collections import namedtuple

from flask_pymongo import PyMongo


TimeInfo = namedtuple("TimeInfo", ["day_of_week", "time"])
mongo = PyMongo()


class Team:
    team_id: str = ""
    class_id: str = ""
    mentor: str = ""
    students: List[str] = []
    num_stickers: int = 0

    def __init__(self, mentor: str, students: List[str], team_id: str, class_id: str):
        self.team_id = team_id
        self.mentor = mentor
        self.students = students
        self.num_stickers = 0

    # positive to increase stickers, negative to decrease stickers
    def change_stickers(self, delta: int):
        self.num_stickers += delta


class Classroom:
    class_id: str = ""
    teacher: str = ""
    time_info: TimeInfo = TimeInfo("", "")
    teams: List[Team] = []

    def __init__(self, class_id: str, teacher: str, day_of_week: str, time: str):
        self.class_id = class_id
        self.teacher = teacher
        time_info = TimeInfo(day_of_week, time)
        self.time_info = time_info

    def refresh_teams(self):
        self.teams = get_teams(self.class_id)

    def add_team(self, mentor: str, students: List[str]):
        add_team(
            mentor, students, self.class_id, self.class_id + str(len(self.teams) + 1)
        )
        self.refresh_teams()


def add_team(mentor: str, students: List[str], class_id: str, team_id: str) -> None:
    doc = {
        "mentor": mentor,
        "students": students,
        "class_id": class_id,
        "team_id": team_id,
        "stickers": 0,
    }
    mongo.db.teams.insert_one(doc)
    return


def get_teams(class_id: str) -> List[Team]:
    teams = mongo.db.teams.find({"class_id": class_id})
    team_arr: List[Team] = []
    for team_obj in teams:
        team = Team(
            team_obj["mentor"],
            team_obj["students"],
            team_obj["team_id"],
            team_obj["class_id"],
        )
        team_arr.append(team)

    return team_arr
