export class Follow {
  public login?: string = "";
  public avatar_url?: string = "";
}

export class Repo extends Follow {
  public name?: string = "";
//A type literal property cannot have an initializer.ts(1247)

  public owner?: {
    avatar_url?: string;
  };
}

export class contributor extends Follow {}
