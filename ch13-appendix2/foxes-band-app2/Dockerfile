## stage1 : 관련된 모듈 다운로드 후 빌드
FROM node:20 AS BUILD
WORKDIR /app-build
COPY . /app-build
RUN npm install
RUN npm run build

## stage2 : stage1에서 빌드한 결과물을 이용해 이미지 빌드
FROM nginx:stable-alpine
# nginx 설정 중에서 404 오류시에 /index.html을 응답하도록 fallback UI 설정한 것으로 교체
COPY --from=BUILD /app-build/nginx-conf/default.conf /etc/nginx/conf.d/
# npm run build로 만들어진 dist 폴더의 빌드 결과물을 nginx 루트로 복사
COPY --from=BUILD /app-build/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
