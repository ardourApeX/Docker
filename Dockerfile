# Step1 : Select a base image
FROM alpine

# Step2 : Install a software
RUN apk add binutils

# Step2.5 : Configure that software

# Step3 : Set default command