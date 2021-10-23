from fastapi import FastAPI, Request
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles

monitor_app = FastAPI()

#declaring where the directory to look for templates
templates = Jinja2Templates(directory="templates")

#declaring where the static files are present
monitor_app.mount("/static", StaticFiles(directory="static"), name="static")

@monitor_app.get("/freemem", response_class=HTMLResponse)
def get_free_mem(request:Request):
    return templates.TemplateResponse("index.html", {"request": request})