class Github {
  constructor() {
    this.client_id ='efd2698093427a7a3fb3';
    this.client_secret = 'dc1cafd55300bd36470fc71e9131b75b0811e819';
    // Show only 5 repos
    this.repos_count = 5;
    // Show recent ones only
    this.repos_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile: profile,
      repos: repos
    };
  }
}