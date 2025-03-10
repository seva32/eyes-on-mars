# Use the latest Node.js LTS version as base
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy all source files
COPY . .

# Expose port 3000
EXPOSE 3000

# Start the development server
CMD ["yarn", "dev"]
