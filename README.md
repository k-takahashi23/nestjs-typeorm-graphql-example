## What's this?

NestJS + GraphQL + TypeORM でのDDD Like なレイヤードアーキテクチャのサンプル。

## 方向性

- ある程度レイヤーごとの詰め替えはする。（Simple > Easy）
- ドメインモデルのデコレータ周りは効率化のため許容する（ドメインモデル = データモデル = GraphQL モデル）
- TODO: CQRS にする

## Architecture

### Write Model (Lightweight Read Model)

基本はこっちを使う。

![フロー図WriteModel](docs/uml/flow.write.png)

![クラス図WriteModel](docs/uml/class.png)

### Read Model

集計系など複雑なクエリが発生する場合はこっちを使う。

![フロー図ReadModel](docs/uml/flow.read.png)

![クラス図ReadModel](docs/uml/class.read.png)

## TODO

- QueryService のパターン（集計系？）作る
- 仮にOrdering としているが、コンテキストマッピングする
- 別のコンテキストのModule も作ってAggregate する
- husky 入れる
- DomainService のパターン作る
- args をうまいことやる
- Date をISO 拡張形式にする
- GraphQL のObject とデータモデルは流石に分けたほうがいいかも