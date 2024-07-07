-- CreateTable
CREATE TABLE "tbl_region" (
    "region_id" SERIAL NOT NULL,
    "region_name_en" TEXT NOT NULL,
    "region_name_jp" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3)
);

-- CreateTable
CREATE TABLE "tbl_city" (
    "city_id" SERIAL NOT NULL,
    "city_name_en" TEXT NOT NULL,
    "city_name_jp" TEXT NOT NULL,
    "region_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3)
);

-- CreateTable
CREATE TABLE "tbl_township" (
    "township_id" SERIAL NOT NULL,
    "township_name_en" TEXT NOT NULL,
    "township_name_jp" TEXT NOT NULL,
    "city_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3)
);

-- CreateTable
CREATE TABLE "tbl_job_type" (
    "job_type_id" SERIAL NOT NULL,
    "job_type_name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3)
);

-- CreateTable
CREATE TABLE "tbl_job" (
    "job_id" SERIAL NOT NULL,
    "township_id" INTEGER NOT NULL,
    "job_name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" INTEGER NOT NULL,
    "image" TEXT,
    "job_type_id" INTEGER NOT NULL,
    "maximum_hourly_rate" INTEGER,
    "minimum_hourly_rate" INTEGER NOT NULL,
    "minimum_work_day" INTEGER NOT NULL,
    "minimum_work_hour" INTEGER NOT NULL,
    "staff_position" TEXT NOT NULL,
    "is_shift_system" BOOLEAN NOT NULL DEFAULT true,
    "nearest_train_station" TEXT NOT NULL,
    "station_to_work_duration" INTEGER NOT NULL,
    "latitube" TEXT NOT NULL,
    "longitube" TEXT NOT NULL,
    "is_open" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL,
    "updated_at" TIMESTAMP(3)
);

-- CreateIndex
CREATE UNIQUE INDEX "tbl_region_region_id_key" ON "tbl_region"("region_id");

-- CreateIndex
CREATE UNIQUE INDEX "tbl_city_city_id_key" ON "tbl_city"("city_id");

-- CreateIndex
CREATE UNIQUE INDEX "tbl_township_township_id_key" ON "tbl_township"("township_id");

-- CreateIndex
CREATE UNIQUE INDEX "tbl_job_type_job_type_id_key" ON "tbl_job_type"("job_type_id");

-- CreateIndex
CREATE UNIQUE INDEX "tbl_job_job_id_key" ON "tbl_job"("job_id");

-- CreateIndex
CREATE UNIQUE INDEX "tbl_job_email_key" ON "tbl_job"("email");

-- AddForeignKey
ALTER TABLE "tbl_city" ADD CONSTRAINT "tbl_city_region_id_fkey" FOREIGN KEY ("region_id") REFERENCES "tbl_region"("region_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_township" ADD CONSTRAINT "tbl_township_city_id_fkey" FOREIGN KEY ("city_id") REFERENCES "tbl_city"("city_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_job" ADD CONSTRAINT "tbl_job_township_id_fkey" FOREIGN KEY ("township_id") REFERENCES "tbl_township"("township_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tbl_job" ADD CONSTRAINT "tbl_job_job_type_id_fkey" FOREIGN KEY ("job_type_id") REFERENCES "tbl_job_type"("job_type_id") ON DELETE RESTRICT ON UPDATE CASCADE;
