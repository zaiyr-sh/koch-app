FROM python:3.8

ENV PYTHONUNBUFFERED 1
ENV PYTHONDONTWRITEBYTECODE 1

RUN set -ex && mkdir /app
WORKDIR /app

COPY requirements.txt /app
RUN pip install -r requirements.txt

RUN echo "ALMT" > /etc/timezone
COPY . /app