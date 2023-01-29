interface IDataUserDTO {
  name: string,
  username: string,
  email: string,
  password: string,
  isAdmin?: boolean,
  drive_license: string,
  id?: string
  avatar?: string,
}

export { IDataUserDTO }