locals {
  tags = {
    Environment = "Production"
    Owner       = "Apurv"
    Workload    = "Portfolio"
  }
}

resource "azurerm_resource_group" "rg" {
  name     = "rg-apurvsinghal-prod"
  location = "australiaeast"
  tags     = local.tags
}

resource "azurerm_log_analytics_workspace" "law" {
  name                = "law-apurvsinghal"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  sku                 = "PerGB2018"
  retention_in_days   = 30
  daily_quota_gb      = 0.1
  tags                = local.tags
}

resource "azurerm_application_insights" "appi" {
  name                = "appi-apurvsinghal"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  workspace_id        = azurerm_log_analytics_workspace.law.id
  application_type    = "web"
  retention_in_days   = 30
  sampling_percentage = 5
  tags                = local.tags
}

resource "azurerm_cognitive_account" "oai" {
  name                = "oai-apurvsinghal"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  kind                = "OpenAI"
  sku_name            = "S0"

  custom_subdomain_name = "oai-apurvsinghal"
  tags                  = local.tags
}

resource "azurerm_static_web_app" "swa" {
  name                = "swa-apurvsinghal"
  location            = "eastasia"
  resource_group_name = azurerm_resource_group.rg.name
  sku_tier            = "Free"
  sku_size            = "Free"
  tags                = local.tags
}
