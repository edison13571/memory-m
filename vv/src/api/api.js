import axios from 'axios'

let base = 'http://123.local'
// let base = ''
export const GetLinks = params => { return axios.get(`${base}/links`, { params: params }) }
export const CreateLink = params => { return axios.get(`${base}/links/create`, { params: params }) }
export const DelLink = params => { return axios.get(`${base}/linksdel`, { params: params }) }
export const GetLists = params => { return axios.get(`${base}/lists`, { params: params }) }
export const CreateList = params => { return axios.get(`${base}/lists/create`, { params: params }) }
export const FinishList = params => { return axios.get(`${base}/listsfinish`, { params: params }) }
export const DelList = params => { return axios.get(`${base}/listsdel`, { params: params }) }
export const GetMemories = params => { return axios.get(`${base}/memories`, { params: params }) }
export const CreateMemory = params => { return axios.get(`${base}/memories/create`, { params: params }) }
export const RememberMemory = params => { return axios.get(`${base}/memoriesremember`, { params: params }) }
export const FinishMemory = params => { return axios.get(`${base}/memoriesfinish`, { params: params }) }
export const DelMemory = params => { return axios.get(`${base}/memoriesdel`, { params: params }) }
export const RestoreMemory = params => { return axios.get(`${base}/memoriesrestore`, { params: params }) }
export const UserLogin = params => { return axios.get(`${base}/logincheck`, { params: params }) }
