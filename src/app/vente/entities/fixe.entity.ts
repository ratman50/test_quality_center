import { AbsctractEntity } from "src/shared/entities/abstract.entity";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("fixe_sales_pkey", ["id"], { unique: true })
@Entity("fixe_sales", { schema: "public" })
export class FixeSales extends AbsctractEntity<FixeSales> {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", {
    name: "site_centre_d_appel",
    nullable: true,
    length: 255,
  })
  siteCentreDAppel: string | null;

  @Column("character varying", {
    name: "civilite",
    nullable: true,
    length: 255,
  })
  civilite: string | null;

  @Column("character varying", {
    name: "nom_client",
    nullable: true,
    length: 255,
  })
  nomClient: string | null;

  @Column("character varying", {
    name: "prenom_client",
    nullable: true,
    length: 255,
  })
  prenomClient: string | null;

  @Column("character varying", {
    name: "numero_client",
    nullable: true,
    length: 255,
  })
  numeroClient: string | null;

  @Column("character varying", {
    name: "jour_acquisition",
    nullable: true,
    length: 255,
  })
  jourAcquisition: string | null;

  @Column("character varying", { name: "logqc", nullable: true, length: 255 })
  logqc: string | null;

  @Column("character varying", {
    name: "nomvendeurs",
    nullable: true,
    length: 255,
  })
  nomvendeurs: string | null;

  @Column("character varying", {
    name: "campagnecarte",
    nullable: true,
    length: 255,
  })
  campagnecarte: string | null;

  @Column("character varying", {
    name: "fichierorigine",
    nullable: true,
    length: 255,
  })
  fichierorigine: string | null;

  @Column("character varying", {
    name: "ishorsfichier",
    nullable: true,
    length: 255,
  })
  ishorsfichier: string | null;

  @Column("character varying", {
    name: "typeoffres",
    nullable: true,
    length: 255,
  })
  typeoffres: string | null;

  @Column("character varying", {
    name: "secondarycampain",
    nullable: true,
    length: 255,
  })
  secondarycampain: string | null;

  @Column("character varying", {
    name: "finalcampain",
    nullable: true,
    length: 255,
  })
  finalcampain: string | null;

  @Column("character varying", {
    name: "idcontrat",
    nullable: true,
    length: 255,
  })
  idcontrat: string | null;

  @Column("character varying", { name: "paid_as", nullable: true, length: 255 })
  paidAs: string | null;

  @Column("character varying", {
    name: "classification",
    nullable: true,
    length: 255,
  })
  classification: string | null;
}
