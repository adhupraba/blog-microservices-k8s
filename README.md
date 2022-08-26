# Ingress Nginx installation

```
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.3.0/deploy/static/provider/cloud/deploy.yaml
```

---

### Note

> imagePullPolicy: Never

## remove this while using for production in google cloud kubernetes or aws eks
