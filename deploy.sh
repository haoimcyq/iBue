# ����������ʱ��ֹ�ű�
set -e

# ����
npm run build

# cd �����������Ŀ¼�� 
cd dist

git init
git add -A
git commit -m 'deploy'

# ���� https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# ���� https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/haoimcyq/ibue.git master:gh-pages

cd -