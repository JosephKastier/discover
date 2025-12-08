#!/bin/bash
# Script um zwischen SQLite (lokal) und PostgreSQL (prod) zu wechseln

if [ "$1" == "local" ]; then
  echo "Switching to SQLite..."
  sed -i '' 's/provider = "postgresql"/provider = "sqlite"/' prisma/schema.prisma
  rm -rf prisma/migrations
  npx prisma migrate dev --name init
  npm run db:seed
  echo "✅ Local SQLite setup complete"
elif [ "$1" == "prod" ]; then
  echo "Switching to PostgreSQL..."
  sed -i '' 's/provider = "sqlite"/provider = "postgresql"/' prisma/schema.prisma
  echo "✅ Ready for production push"
else
  echo "Usage: ./scripts/switch-db.sh [local|prod]"
fi
