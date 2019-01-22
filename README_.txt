SET UP VIRTUAL ENV USING YAML(.yml INSIDE misc)
conda env create -f <YAML FILE>

SOURCE ACTIVATE virtual_platform
GO TO /python
RUN face_recog.py IN ENV virtual_platform

RUN WITHOUT VIRTUAL ENV
GO TO /
RUN node/servers/server.js
GO TO /
RUN misc/testlog.js