import { AbsctractEntity } from "src/shared/entities/abstract.entity";
import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";
@Index("users_pkey", ["id"], { unique: true })
@Entity("users", { schema: "public" })
export class User extends AbsctractEntity<User> {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character varying", { name: "name", length: 100 })
  name: string;

  @Column("character varying", { name: "password", length: 50 })
  password: string;

  @Column("character varying", {
    name: "email",
    nullable: true,
    unique: true,
    length: 255,
  })
  email: string | null;
}
