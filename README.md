## What's this?

NestJS + GraphQL + TypeORM でのDDD Like なレイヤードアーキテクチャのサンプル。

## 方向性

- ある程度レイヤーごとの詰め替えはする。（Simple > Easy）
- ドメインモデルのデコレータ周りは効率化のため許容する（ドメインモデル = データモデル）
- TODO: CQRS にする

## Architecture

### Write Model (Lightweight Read Model)

基本はこっちを使う。

![フロー図WriteModel](docs/uml/flow.write.png)

![クラス図WriteModel](docs/uml/class.write.png)

### Read Model

集計系など複雑なクエリが発生する場合はこっちを使う。

![フロー図ReadModel](docs/uml/flow.read.png)

![クラス図ReadModel](docs/uml/class.read.png)

## TODO

1. args をうまいことやる
2. Read Model のパターンの実装
3. DomainService のパターン作る
4. 仮にOrdering としているが、コンテキストマッピングする
5. Date をISO 拡張形式にする