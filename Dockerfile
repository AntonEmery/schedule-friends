# Specify the Node.js base image
FROM node:20

# Set the working directory
WORKDIR /usr/src/app

# Copy the package.json and package-log.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the source code
COPY . .

# Expose the port that the app will run on
EXPOSE 3000

# Define the command to run the app
CMD ["npm", "start"]