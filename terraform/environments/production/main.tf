terraform {
  backend "s3" {
    bucket         = "dg-portfolio-us-east-2-tfstate"
    key            = "environments/production/terraform.tfstate"
    region         = "us-east-2"
    dynamodb_table = "dg-portfolio-us-east-2-lock"
    encrypt        = true
  }

  required_providers {
    vercel = {
      source  = "vercel/vercel"
      version = "~> 0.3"
    }
  }
}

data "vercel_project_directory" "directory" {
  path = "../../../doppelgengar.dev"
}

resource "vercel_project" "portfolio" {
  name      = "doppelgengar-portfolio"
  framework = "nextjs"
}

resource "vercel_deployment" "deployment" {
  project_id  = vercel_project.portfolio.id
  files       = data.vercel_project_directory.directory.files
  path_prefix = "../../../doppelgengar.dev"
  production  = true
}

resource "vercel_project_domain" "apex" {
  project_id = vercel_project.portfolio.id
  domain     = "doppelgengar.dev"
}

resource "vercel_project_domain" "www" {
  project_id = vercel_project.portfolio.id
  domain     = "www.doppelgengar.dev"
}