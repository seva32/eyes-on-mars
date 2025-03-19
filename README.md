## Getting Started

First, run the development server:

```bash
yarn dev
```

# Commands

```ruby
sudo apt update
sudo apt install docker.io -y
sudo apt install docker-compose
sudo systemctl enable --now docker
sudo usermod -aG docker $USER

docker-compose -f docker-compose.dev.yml up --build # docker-compose up --build [service] & docker-compose restart
# .env issues with docker-compose bc windows use CRLF and we need LF for unix, options:
# 1 change it in vscode and save
# 2 dos2unix .env
# 3 export $(grep -v '^#' .env | xargs) before docker build
docker-compose -f docker-compose.dev.yml --env-file .env.local up -d --build
docker-compose logs -f
# docker compose config
# docker system prune --volumes
# docker system prune -a
# docker volume ls
# docker ps -a --filter volume=<volume_name>
# docker volume prune
# docker volume rm <volume_name>
# docker builder prune
# export $(grep -v '^#' .env | xargs) # there was an issue with crlf and lf for .env
docker exec [container] env
export $(grep -v '^#' .env.local | xargs) && docker exec -it "$POSTGRES_HOST_DEV" psql -U "$POSTGRES_USER" -d "$POSTGRES_DB"
docker exec -it mars_project_nextjs_dev sh
# docker ps --format "table {{.ID}}\t{{.Command}}\t{{.Names}}\t{{.Status}}"
yarn run prisma:db:pull
yarn run prisma:generate
```

When trying to enter the container the user was not found, bc there was an old volume used, so docker-compose down -v was the solution, and then docker-compose up -d

To use buildkit:

```bash
mkdir -p ~/.docker/cli-plugins
curl -sL https://github.com/docker/buildx/releases/download/v0.21.2/buildx-v0.21.2.linux-amd64 -o ~/.docker/cli-plugins/docker-buildx
chmod +x ~/.docker/cli-plugins/docker-buildx

# Enable BuildKit
export DOCKER_BUILDKIT=1

# Create and use a new builder instance
docker buildx create --name marsbuilder --use

# Build the images using docker-compose with BuildKit enabled
docker-compose build

# Run Docker Compose
docker-compose up
```

# Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

# env

```ruby
POSTGRES_USER=mars_user
POSTGRES_PASSWORD=mars_password
POSTGRES_DB=mars_db
POSTGRES_HOST=mars_db_container
POSTGRES_PORT=5555
```

```bash
docker-compose -f docker-compose.dev.yml --env-file .env.local build
docker-compose -f docker-compose.dev.yml --env-file .env.local up
docker-compose run nextjs yarn run prisma:migrate
```

If something fails for TypeORM, check the ports in .env and ormconfig.ts

For migrations docker exec to run in nextjs container: yarn run prisma:migrate, or use docker-compose run nextjs yarn run prisma:migrate

In windows create DB in Supabase and use the connexion string in .env.local, in .env.local update DATABASE_URL and comment NEXTAUTH_URLs, then yarn run dev:r
