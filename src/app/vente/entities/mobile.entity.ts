import { AbsctractEntity } from "src/shared/entities/abstract.entity";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("mobile_sales_pkey", ["id"], { unique: true })
@Entity("mobile_sales", { schema: "public" })
export class MobileSales  extends AbsctractEntity<MobileSales>{
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", {
    name: "date_commande",
    nullable: true,
    length: 255,
  })
  dateCommande: string | null;

  @Column("character varying", {
    name: "numero_de_telephone",
    nullable: true,
    length: 255,
  })
  site_vendeur: string | null;

  @Column("character varying", {
    name: "numero_de_telephone",
    nullable: true,
    length: 255,
  })

  numeroDeTelephone: string | null;

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
