## What's this?

NestJS + GraphQL + TypeORM でのDDD Like なモジュラーモノリスのレイヤードアーキテクチャのサンプル。

## How to run

```bash
$ docker-compose up -d
$ yarn
$ yarn dev
```

http://localhost:3000/graphql

## Architecture

- ある程度レイヤーごとの詰め替えはする（Simple > Easy）
- ドメインモデルのデコレータ周りは効率化のため許容する（ドメインモデル = データモデル）
- CQRS にする

### Write Model (Lightweight Read Model)

基本はこっちを使う。

![フロー図WriteModel](docs/uml/flow.write.png)

![クラス図WriteModel](docs/uml/class.write.png)

### Read Model

集計系など複雑なクエリが発生する場合はこっちを使う。

![フロー図ReadModel](docs/uml/flow.read.png)

![クラス図ReadModel](docs/uml/class.read.png)

## 実装手順（仮）

実際にこのような構成で実装を進めると仮定して流れを整理。

1. ドメインモデリングを行う = Aggregate を作成する
2. API I/F （GraphQL）設計を行う = Object, Resolver を作成する
3. DB （データモデル）設計を行う = DataModel を作成する
4. Usecase を作成する
5. Interactor を実装する
6. DI 設定を追加する

## TODO

1. AutoMapper をうまいことやる
2. args をうまいことやる
3. Read Model のパターンの実装
4. DomainService のパターン作る
5. Date をISO 拡張形式にする
6. ordering 以外のモジュールを実装する

## References

- https://martinfowler.com/bliki/Seedwork.html
- https://github.com/dotnet-architecture/eShopOnContainers