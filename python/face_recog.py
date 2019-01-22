# Face Recognition

#using opencv
import cv2
from time import sleep

#cascade files to detect face and eyes
face_cascade = cv2.CascadeClassifier('haarcascade_frontalface_default.xml') # We load the cascade for the face.

def detect(gray, frame): # We create a function that takes as input the image in black and white (gray) and the original image (frame), and that will return the same image with the detector rectangles. 
    f=open("camlog.txt" , "w") #open log file each time
    faces = face_cascade.detectMultiScale(gray, 1.3, 5) # We apply the detectMultiScale method from the face cascade to locate one or several faces in the image.
    if(len(faces)>0):
        f.write("Y")
        for (x, y, w, h) in faces: # For each detected face:
            cv2.rectangle(frame, (x, y), (x+w, y+h), (0, 255, 0), 2) # We paint a rectangle around the face.
    else:
        f.write("N")
    f.close()
    return frame # We return the image with the detector rectangles.

video_capture = cv2.VideoCapture(0) # We turn the webcam on.

while True: # We repeat infinitely (until break):
    sleep(0.5)
    _, frame = video_capture.read() # We get the last frame.
    gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY) # We do some colour transformations.
    canvas = detect(gray, frame) # We get the output of our detect function.
    #cv2.imshow('Video', canvas) # We display the outputs. UNCOMMENT TO SHOW LIVE FEED
    if cv2.waitKey(1) & 0xFF == ord('q'): # If we type on the keyboard:
        break # We stop the loop.

video_capture.release() # We turn the webcam off.
cv2.destroyAllWindows() # We destroy all the windows inside which the images were displayed.