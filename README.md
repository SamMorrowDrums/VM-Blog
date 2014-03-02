VM-Blog
=======

CMS / blog platform built using Node.JS and ViewMachine

This project is not complete, however, once you have run the install script you shoud be able to keep up-to-date as the project continues

##Install

To create a new VM-Blog instance, download the install.sh file from this repository and spawn a new linux instance on a cloud services.

_Srcoll down for AWS Cloud Server instructions below_

This 'get started guide', assumes you are using the latest Ubuntu LTS web server, and the script and vmblog.conf file may need to be edited before you can successfully run this project in other environments.


First upload the file to your server (replace cmblogtest with your .ssh/config hostname):

`scp install.sh vmblogtest:install.sh`

Now log into the server

`ssh vmblogtest`

```chmod 700 install.sh
sudo ./install.sh
```

Agree to any prompts (they will ask you to press Y or Enter several times)

Finally, visit the public web address of your server in an web browser and you should see "Hello World!"


## AWS Instructions

To begin with, set up an Amazon Web Services Account, and got to the control panel

If unsure about the type of instance you want, start with a new EC2 with Ubuntu 12.x LTS operating system and port 80 open in the security group. Also make sure to set up your .ssh/config and keys (Amazon provide some help with this).

If this is a complete stumbling block, please wait until this prouct is prepared for general public use.