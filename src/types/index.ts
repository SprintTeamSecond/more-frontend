export interface UserEntity {
  id: string;
}

export interface GithubUser extends UserEntity {
  github_email: string;
  avatar: any;
  name: string;
  url: string;
  introduce: string;
  following?: number;
  followers?: number;
}

export type ProfileProps = {
  email: string;
  avatar: string;
  name: string;
  id: string;
};

export type LikeProps = {
  _id: string;
  title: string;
  like: number;
  description: string;
  used_language: string[];
  thumbnail: string;
  created_at: string;
};

export interface PostEntity {
  id: string;
  title: string;
  post_like?: number;
  description: string;
  hashtag?: string;
  thumbnail?: string;
  created_at: string;
}

export interface GithubPost extends PostEntity {
  id: string;
  stars: number;
  author: string;
  url: string;
  used_language: string;
  readme_url: string;
  full_name: string;
}

export interface RepositoryForDropdown {
  id: string;
  name: string;
  url: string;
  description: string;
  user: string;
  full_name: string;
  updated_at: string;
}

export interface ImageEntity {}

export interface PostCreateForm {
  author: string;
  github_repository_id: string;
  title: string;
  description: string;
  hashtag: string;
}

export interface PostUpdateForm {
  id: string;
}

export interface PostDeleteForm {
  id: string;
}
