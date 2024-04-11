terraform {
  backend "s3" {
    bucket         = "dg-portfolio-us-east-2-tfstate"
    key            = "environments/staging/terraform.tfstate"
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
  name      = "staging-doppelgengar-portfolio"
  framework = "nextjs"
}

resource "vercel_deployment" "deployment" {
  project_id  = vercel_project.portfolio.id
  files       = data.vercel_project_directory.directory.files
  path_prefix = "../../../doppelgengar.dev"
  production  = false
}

resource "vercel_project_domain" "wwwstaging" {
  project_id = vercel_project.portfolio.id
  domain     = "www.staging.doppelgengar.dev"
}

resource "vercel_project_domain" "staging" {
  project_id = vercel_project.portfolio.id
  domain     = "staging.doppelgengar.dev"
}