export interface UserEntity {
  _id: string;
  user: string;
}

export interface GithubUser extends UserEntity {
  github_email: string;
  github_avatar: string;
  github_username: string;
}

export interface PostEntity {
  _id: string;
  title: string;
  like: number;
  description: string;
  used_language: string[];
  thumbnail: string;
  created_at: string;
}

export interface GithubPost extends PostEntity {
  star: number;
  author: UserEntity;
  github_url: string;
  //github api >> data
  // +
  // db data
}

export interface ImageEntity {}

export interface PostCreateForm {
  id: string;
}

export interface PostUpdateForm {
  id: string;
}

export interface PostDeleteForm {
  id: string;
}
