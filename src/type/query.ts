export enum Mode {
  AVG = 'avg',
  SUM = 'sum',
  MULTIPLY = 'multiply',
  MAX = 'max',
  MIN = 'min',
  TOTAL = 'total',
}
export interface TermQuery {
  term: { [key: string]: unknown | { value: unknown; boost?: number } }
}

export interface RangeQuery {
  range: {
    [key: string]: { gte?: unknown; lte?: unknown; gt?: unknown; lt?: unknown }
  }
}

export type SingleExistenceQuery = {
  exists: {
    field: string
    boost?: number
  }
}

export type MultiExistenceQuery = {
  bool: {
    must: {
      exists: {
        field: string
        boost?: number
      }
    }[]
  }
}

export type ExistenceQuery = SingleExistenceQuery | MultiExistenceQuery

export type ShouldQuery = {
  should?: QuerySentence[]
}
export type MustQuery = {
  must?: QuerySentence | QuerySentence[]
}

export type FilterQuery = {
  filter?: QuerySentence | QuerySentence[]
}

export type MustNotQuery = {
  must_not?: QuerySentence | QuerySentence[]
}

export interface BoolQuery {
  bool: ShouldQuery | MustQuery | FilterQuery | MustNotQuery
}

export interface ConstantScoreQuery {
  constant_score: {
    filter: QuerySentence | QuerySentence[]
    boost?: number
  }
}

export interface MatchAllQuery {
  match_all: {}
}

export type QuerySentence =
  | TermQuery
  | RangeQuery
  | MustQuery
  | MustNotQuery
  | FilterQuery
  | ShouldQuery
  | ExistenceQuery
  | ConstantScoreQuery
  | BoolQuery
  | MatchAllQuery

export interface RescoreQuery {
  window_size: number
  query: {
    rescore_query: any
    score_mode: Mode
    rescore_query_weight: number
  }
}

export type DSL = {
  size?: number
  from?: number
  explain?: boolean
  query?: unknown
  rescore?: unknown
}
