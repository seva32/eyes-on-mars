-- CreateTable
CREATE TABLE "favorite_photo" (
    "id" SERIAL NOT NULL,
    "photoUrl" VARCHAR NOT NULL,
    "rover" VARCHAR,
    "camera" VARCHAR,
    "sol" INTEGER,
    "rating" INTEGER,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "PK_c849a0ba75580d1029042c4d212" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "profile" (
    "id" SERIAL NOT NULL,
    "avatarUrl" VARCHAR,
    "bio" TEXT,
    "planet" TEXT,

    CONSTRAINT "PK_3dd8bfc97e4a77c70971591bdcb" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR NOT NULL,
    "email" VARCHAR,
    "password" VARCHAR,
    "oauthProvider" VARCHAR,
    "oauthId" VARCHAR,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "profileId" INTEGER,

    CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UQ_78a916df40e02a9deb1c4b75edb" ON "user"("username");

-- CreateIndex
CREATE UNIQUE INDEX "UQ_e12875dfb3b1d92d7d7c5377e22" ON "user"("email");

-- AddForeignKey
ALTER TABLE "favorite_photo" ADD CONSTRAINT "FK_4b24235810b4c6500571a657dc1" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "FK_9466682df91534dd95e4dbaa616" FOREIGN KEY ("profileId") REFERENCES "profile"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
