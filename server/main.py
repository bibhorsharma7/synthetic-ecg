from fastapi import FastAPI
from pydantic import BaseModel

from models import mcsharry

app = FastAPI()

@app.get("/")
async def main():
    return {"message": "Synthetic ECG Generator API"}


class Parameters(BaseModel):
    rate1: int
    rate2: int | None
    time: int
    a1: float
    a2: float
    a3: float
    a4: float
    a5: float
    b1: float
    b2: float
    b3: float
    b4: float
    b5: float
    th1: float
    th2: float
    th3: float
    th4: float
    th5: float
    z0: float
    x: float 
    y: float 
    z: float 



@app.post("/solve")
async def solve(parameters: Parameters):
    print('parameters:', parameters)
    res, finalValues = mcsharry.solve(parameters)
    return {"graph": res, "finalValues": finalValues}
