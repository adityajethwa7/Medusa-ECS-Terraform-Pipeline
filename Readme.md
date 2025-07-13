
# Medusa ECS Terraform Pipeline

**Complete DevOps project deploying Medusa headless commerce platform to AWS ECS using Infrastructure as Code (Terraform) and CI/CD pipeline (GitHub Actions).**

## Project Overview

This project demonstrates modern DevOps practices by automating the deployment of a Medusa e-commerce backend to AWS cloud infrastructure. It showcases containerization, infrastructure automation, and continuous deployment.

### Technologies Used

- Medusa.js - Headless commerce platform  
- Docker - Application containerization  
- Terraform - Infrastructure as Code (IaC)  
- AWS ECS Fargate - Serverless container orchestration  
- GitHub Actions - CI/CD pipeline automation  
- AWS ECR - Container image registry  
- Application Load Balancer - Traffic distribution  
- CloudWatch - Monitoring and logging  

---

## Setup Instructions

### Prerequisites

- AWS Free Tier Account  
- GitHub Account  
- Node.js 18+ installed  
- Docker installed  
- Terraform installed  
- AWS CLI installed  

### Step 1: Clone and Setup Project

```bash
git clone https://github.com/adityajethwa7/Medusa-ECS-Terraform-Pipeline.git
cd medusa-ecs-terraform-pipeline

cd medusa-backend
npm install
cd ..
````

### Step 2: Configure AWS Credentials

```bash
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install

aws configure
# Provide your Access Key ID, Secret, region (e.g. us-east-1), and output format

aws sts get-caller-identity
```

### Step 3: Deploy Infrastructure with Terraform

```bash
cd terraform
terraform init
terraform plan
terraform apply
# Confirm with 'yes'
terraform output
```

### Step 4: Test Docker Build (Optional)

```bash
cd medusa-backend
docker build -t medusa-test .
cd ..
```

### Step 5: Setup GitHub Repository and CI/CD

```bash
git init
git add .
git commit -m "Initial DevOps project setup"
git remote add origin https://github.com/adityajethwa7/Medusa-ECS-Terraform-Pipeline.git
git branch -M main
git push -u origin main
```

### Step 6: Configure GitHub Secrets

In your GitHub repository:

* Go to `Settings > Secrets and variables > Actions`
* Add:

  * `AWS_ACCESS_KEY_ID`
  * `AWS_SECRET_ACCESS_KEY`

### Step 7: Trigger CI/CD Pipeline

```bash
echo "# DevOps Pipeline Active" >> README.md
git add .
git commit -m "Trigger CI/CD pipeline"
git push
```

### Step 8: Verify Deployment

```bash
aws ecs describe-services --cluster medusa-ecs --services medusa-ecs
terraform output load_balancer_dns
```

Open the DNS output URL in a browser to access the application.

---

## Architecture Diagram


<img width="4695" height="5468" alt="medusa-cicd-architecture" src="https://github.com/user-attachments/assets/da497ff5-6562-4e47-897c-e1e2704515f5" />


---

## Architecture Flow Explanation

### Phase 1: Development & Source Control

**Developer** writes and pushes code to GitHub
All code, Dockerfile, Terraform configs, and CI/CD workflows are version controlled

### Phase 2: Continuous Integration (CI)

* GitHub Actions workflow triggers on push to `main`
* Docker image is built, tagged, and pushed to AWS ECR

### Phase 3: Container Registry

* Docker image stored in AWS ECR
* Tagged by commit SHA
* Secure and scanned for vulnerabilities

### Phase 4: Container Orchestration

* ECS pulls the latest image from ECR
* Fargate launches new containers
* ECS performs rolling updates for zero downtime

### Phase 5: AWS Cloud Infrastructure

* VPC with public subnets
* Load Balancer distributes traffic
* Security Groups restrict traffic
* IAM roles provide minimal required access

### Phase 6: Task Execution

* ECS Task Definition specifies container config
* Fargate runs containers serverlessly
* ECS Service ensures desired tasks are running

### Phase 7: Monitoring & Logging

* CloudWatch logs application output
* CloudWatch monitors performance and ECS health
* Alerts can be configured for proactive response

### Phase 8: User Access

* Internet Gateway provides connectivity
* ALB exposes application to public
* End users access app via ALB DNS

---

## Management Commands

### Infrastructure

```bash
terraform apply
terraform destroy
terraform show
terraform plan
```

### ECS Management

```bash
aws ecs update-service --cluster medusa-ecs --service medusa-ecs --desired-count 2
aws ecs update-service --cluster medusa-ecs --service medusa-ecs --desired-count 0
aws ecs describe-services --cluster medusa-ecs --services medusa-ecs
aws logs tail /ecs/medusa-ecs --follow
```

### Monitoring

```bash
aws ecs list-tasks --cluster medusa-ecs
aws ecs describe-tasks --cluster medusa-ecs --tasks [TASK_ARN]
aws elbv2 describe-target-health --target-group-arn [TARGET_GROUP_ARN]
```

---

## Cost Management

### Free Tier Usage

* ECS Fargate: 750 hours/month
* Application Load Balancer: 750 hours/month
* ECR: 500 MB storage/month
* CloudWatch Logs: 5 GB/month
* VPC: Free

### Cost-Saving Tips

```bash
# Scale down when not needed
aws ecs update-service --cluster medusa-ecs --service medusa-ecs --desired-count 0



# Destroy infra to save costs
terraform destroy
```



---


