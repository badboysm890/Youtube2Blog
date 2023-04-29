from __future__ import unicode_literals
from fastapi import Body, FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import re
import os

app = FastAPI()



origins = [
    "http://localhost",
    "http://127.0.0.1:5500",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/")
async def check_image(request: Request):
    request = await request.json()
    print(request)
    url = request["url"]
    textName = re.sub(r"[^a-zA-Z0-9]+", ' ', url)
    textName = textName.replace(" ", "_")
    textName = textName + ".txt"
    os.system("python main.py --params " + request["url"] + "  --name " + textName)
    with open(textName, "r") as f:
        text = f.read()
    os.remove(textName)
    return {"text": text}