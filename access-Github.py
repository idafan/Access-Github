
#Accessing information from github

from github import Github

guser = "idafan"
gpassword = "123Dublin"

ida = Github(guser, gpassword)

##repos = [_ for _ in ida.get_user().get_repos()]
##print(repos)
##
##commit = ida.get_commit(sha=sha)
##print(commit.commit.author.date)
##
##repos = [_ for _ in ida.get_user().get_repos()]
##print(repos)

repo = ida.get_repo("idafan/CS3012SE")
branches = list(repo.get_branches())
print(branches)


commit = repo.get_commit('master')
print(commit.commit.author.date)

##for repo in ida.get_user().get_repos():
##        print(repo.name)
##
##ida = Github("idafan","123Dublin")
##
##repo = ida.get_repo("CS3012SE")
##list(repo.get_branches())
##[Branch(name="master")]

##for c in ida.commits.forBranch('idafan', 'CS3041SE'):
##    print(c)



##commits = repo.iter_commits('--all', max_count=100, since='60.days.ago', paths=path)
