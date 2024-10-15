interface ResponseData {
  status?: string
  numbers?: string
  count?: string
  phones?: string[]
  supression?: string[]
  wireless?: string[]
}

export interface BlackListData {
  response?: ResponseData
  timeTaken?: string
}
