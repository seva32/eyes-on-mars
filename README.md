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

docker-compose up --build # docker-compose up --build [service] & docker-compose restart
# .env issues with docker-compose bc windows use CRLF and we need LF for unix, options:
# 1 change it in vscode and save
# 2 dos2unix .env
# 3 export $(grep -v '^#' .env | xargs) before docker build
docker-compose up -d --build
docker-compose logs -f
# docker compose config
# docker system prune --volumes
# docker system prune -a
# docker builder prune
# export $(grep -v '^#' .env | xargs) # there was an issue with crlf and lf for .env
docker exec [container] env
export $(grep -v '^#' .env | xargs) && docker exec -it "$POSTGRES_HOST" psql -U "$POSTGRES_USER" -d "$POSTGRES_DB"
docker exec -it mars_project_nextjs sh
# docker ps --format "table {{.ID}}\t{{.Command}}\t{{.Names}}\t{{.Status}}"
yarn typeorm migration:create src/migrations/[CreateUsersAndProfiles]
vi src/migrations/CreateUsersAndProfiles.ts
yarn ts-node --transpile-only ./node_modules/typeorm/cli.js migration:run -d src/config/ormconfig.ts
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
