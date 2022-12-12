![](https://img.shields.io/badge/-FastAPI-grey?style=for-the-badge&logo=fastapi) ![](https://img.shields.io/badge/-Python-grey?style=for-the-badge&logo=python)

![monitor](https://user-images.githubusercontent.com/53041219/207018446-d23043bd-7832-4157-8cd3-26bfa634fbc1.gif)

[demo](https://www.linkedin.com/posts/yash-indane-aa6534179_fastapi-monitoring-softwaredevelopement-activity-6860459061431828480-HdIu)

## Requirements

Requirements are mentioned in [requirements.txt](https://github.com/YashIndane/monitoring-webapp/blob/main/requirements.txt), Install by -

```
$ pip3 install -r requirements.txt
```

## Running the App

Run by -

```
$ uvicorn app:monitor_app --host 0.0.0.0 --port <PORT> --reload
```

## Configuration on System to be monitored

Install `httpd` and `sysstat` by -

```
$ yum install httpd sysstat
```

Start the httpd service by `$ systemctl start httpd`.

Have this files in `/var/www/cgi-bin` directory -

Have this lines of code at beginning of each file

```py
#!/usr/bin/python3

from subprocess import getstatusoutput as gso
import cgi

print("content-type:text/plain")
print("Access-Control-Allow-Origin: *")
print()
```

`getfreemem.py`

```py
free_mem = int(gso("free -m | grep 'Mem:' | awk '{ print $4 }'")[1])
total_mem = int(gso("free -m | grep 'Mem:' | awk '{ print $2 }'")[1])
percent_free = (free_mem * 100 ) / total_mem
print(percent_free)
```

`getreadspeed.py`

```py
read_speed = gso("iostat | grep sda | awk '{ print $3 }'")[1]
print(read_speed)
```

`getwrspeed.py`

```py
write_speed = gso("iostat | grep sda | awk '{ print $4 }'")[1]
print(write_speed)

```

`getcpuuse.py`

```py
cpu = gso("mpstat | grep all | awk '{ print $3 }'")[1]
print(cpu)
```

Make above files executable by-

```
$ chmod +x <FILE-NAME>
```
