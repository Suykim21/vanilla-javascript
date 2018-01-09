class Github {
  constructor() {
    this.client_id ='efd2698093427a7a3fb3';
    this.client_secret = 'dc1cafd55300bd36470fc71e9131b75b0811e819';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&client_id=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profileData = await profileResponse.json();
    const repoData = await repoResponse.json();

    return {
      profile: profileData,
      repos: repoData
    };
  }
}