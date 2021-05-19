# 2) helm install my-app ./node-chart

# 3) migration files is placed at migrations folder

# 4) Commands

kubectl apply -f storage-class.yaml
kubectl apply -f persistent-volume.yaml
kubectl apply -f mongo-secret.yaml
kubectl apply -f mongo.yaml
kubectl apply -f mongo-configmap.yaml
kubectl apply -f backend.yaml

# 5) Postman collection

postman requests collection is at this folder
