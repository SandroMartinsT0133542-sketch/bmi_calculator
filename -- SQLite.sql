-- SQLite
create table bmi_records (
  id integer primary key autoincrement,
  weight real not null,
  height real not null,
  bmi real not null,
  category text not null,
  recorded_at datetime default current_timestamp
);

insert into bmi_records (weight, height, bmi, category) values (70, 1.75, 22.86, 'Peso normal');
insert into bmi_records (weight, height, bmi, category) values (85, 1.80, 26.23, 'Pré-obesidade (Sobrepeso)');
insert into bmi_records (weight, height, bmi, category) values (95, 1.65, 34.90, 'Obesidade grau I');
insert into bmi_records (weight, height, bmi, category) values (110, 1.60, 42.97, 'Obesidade grau III (Mórbida)');

