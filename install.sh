#### ViewMachine Blog install script ### 

# Begin sourcing updated repositories and setup for nodeJS, git and mongoDB
cd $HOME
sudo apt-get update
sudo apt-get install python-software-properties python g++ make
sudo add-apt-repository ppa:chris-lea/node.js
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | sudo tee /etc/apt/sources.list.d/mongodb.list


# Do final update once all the pre-requisites are there
sudo apt-get update

# Start installing
sudo apt-get install git
sudo apt-get install nodejs
sudo apt-get install mongodb-10gen


#Set up mongo
echo "mongodb-10gen hold" | sudo dpkg --set-selections
sudo service mongodb start

#pull down the application
git clone https://github.com/SamMorrowDrums/VM-Blog.git blog
cd blog

#Daemonize the process
sudo cp vmblog.conf /etc/init/vmblog.conf
sudo chmod 700 /etc/init/vmblog.conf

#Set up node
cd app
sudo npm update
sudo start vmblog


##This still needs a lot of work, but these are the basic commands that will need to run successfult to ensure vmblog is updatable and will work

