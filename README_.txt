SET UP VIRTUAL ENV USING YAML(.yml INSIDE misc)
conda env create -f <YAML FILE>

SOURCE ACTIVATE virtual_platform(CAN RUN W/O ENV)
GO TO /python
RUN face_recog.py IN ENV virtual_platform

RUN WITHOUT VIRTUAL ENV
GO TO /node/
CHANGE PORT OF server.js
RUN node server/servers/server.js
GO TO /
RUN misc/testlog.js


//INSTALL ROBOTJS , IOHOOK
 sudo npm install robotjs --save --unsafe-perm
 sudo npm install iohook --save --unsafe-perm
 sudo npm install node-hid --save --unsafe-perm