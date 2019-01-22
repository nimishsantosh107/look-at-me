SOURCE ACTIVATE virtual_platform
GO TO /python
RUN face_recog.py IN ENV virtual_platform
GO TO /
RUN servers/server.js AND handle events