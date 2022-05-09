---
id: introduction
title: Introduction to Prometheus
tags:
  - Prometheus
---

Prometheus는 동적 클라우드 환경을 모니터링하는 데 특히 적합한 모니터링 시스템 및 시계열 데이터베이스입니다. Prometheus는 차원(dimensional) 데이터 모델과 강력한 쿼리 언어(PromQL)를 갖추고 있으며 계측(instrumentation), 메트릭(metrics) 수집, 서비스 디스커버리(discovery) 및 얼럿(alert)와 같은 구성요소들을 하나의 에코시스템에 통합하여 제공합니다.

## 전제조건

해당 튜토리얼에 필요한 소프트웨어 및 기존 경험의 전제조건을 설명합니다.

## 소프트웨어 요구사항

이 튜토리얼은 기본적으로 Ubuntu Linux 20.04에서 테스트되었습니다. 그러나 대부분의 내용은 다른 최신 리눅스 배포판에도 사용이 가능합니다. Mac OS X, *BSD 또는 Windows에서 많은 부분을 수행할 수 있지만 일부 내용은 적용되지 않거나 수정이 필요합니다.

## 기술 경험 요구사항

Unix/Linux 서버 관리에 대한 기본 지식이 필요합니다. 시스템 모니터링 경험이 도움이 되지만 반드시 필요한 것은 아닙니다. 프로메테우스 자체에 대한 사전 지식은 반드시 필요하지 않습니다.

## What is Prometheus?

Prometheus은 메트릭 기반 모니터링 및 알림 스택입니다.

프로메테우스는 Prometheus는 다른 에코시스템 구성 요소와 통합하여 모니터링 파이프라인을 제공합니다. 다음과 같은 기능을 기본적으로 제공합니다. 

- 계측(측정 메트릭 추적(tracking) 및 노출(exposing))
- 메트릭 수집
- 메트릭 저장
- 경고(alerting), 대시보드, 메트릭 쿼리

Prometheus는 자체 애플리케이션 소프트웨어, 타사 서비스, 호스트 또는 네트워크 디바이스 등 인프라스트럭 스택의 모든 수준을 모니터링할 수 있을 정도로 범용적입니다.

Prometheus는 동적 클라우드 환경 및 Kubernetes와 같은 클러스터 스케줄러를 모니터링하는 데 특히 유용합니다.

프로메테우스는 다음과 같은 문제를 해결하는 것을 목표로 하지 않습니다.

- 로깅(logging) 또는 추적(tracing) - Prometheus는 시계열이라고도 하는 메트릭만 처리합니다.
- 기계 학습 또는 AI 기반 이상 탐지
- 수평적으로 확장 가능한 클러스터형 스토리지

이러한 기능은 중요한 기능이 될 수 있지만 Prometheus와 함께 실행되는 다른 시스템에서 해결해야 할 문제입니다.

## 시스템 아키텍처

다음 다이어그램은 전체 Prometheus 시스템 아키텍처에 대한 개요를 보여줍니다.

![Untitled](https://prometheus.io/assets/architecture.png)

그림 출처 : [https://prometheus.io/docs/introduction/overview/](https://prometheus.io/docs/introduction/overview/)

일반적으로 Prometheus 모니터링 설정의 핵심을 이루는 하나 이상의 Prometheus 서버를 실행합니다. Prometheus 서버는 DNS, Consul, Kubernetes 등과 같은 서비스 디스커버리 메커니즘을 사용하여 메트릭 소스("타겟")을 검색하도록 구성됩니다. 그런 다음 Prometheus는 HTTP를 통해 이러한 대상으로부터 텍스트 기반 형식의 메트릭을 주기적으로 풀링(또는 "스크랩")하고 수집된 데이터를 로컬 시계열 데이터베이스에 저장합니다.

타겟은 Prometheus 메트릭 자체를 직접 추적하고 노출하는 애플리케이션이나 기존 시스템(MySQL 서버 등)의 메트릭을 Prometheus 메트릭 노출 형식으로 변환하는 익스포터(exporter)일 수 있습니다. 그런 다음 Prometheus 서버는 수집된 데이터를 기본 제공 웹 UI로 제공하고, Grafana와 같은 대시보드 도구를 사용하거나 HTTP API를 직접 사용하여 쿼리를 사용할 수 있도록 합니다.

> 참고: 각 스크랩은 타겟의 모든 시계열의 현재 값만 Prometheus로 전송하므로 스크랩 주기에 따라 저장된 데이터의 최종 샘플링 빈도가 결정됩니다. 해상도 또는 분해능이라 부르기도 합니다.타겟 프로세스 자체는 기록 메트릭 데이터를 보유하지 않습니다.
> 

수집된 데이터를 기반으로 알림을 생성하도록 Prometheus 서버를 구성할 수도 있습니다. 그러나 프로메테우스는 직접 얼럿 통지(notification)를 보내지 않습니다. 대신 raw 알림을 별도의 서비스로 실행되는 Prometheus AlertManager로 전달합니다. AlertManager는 조직의 여러 Prometheus 서버 또는 모든 서버에서 알림을 수신할 수 있으며 이러한 알림을 그룹화, 집계 및 라우팅할 수 있는 기능을 제공합니다. 마지막으로 이메일, 슬랙, PagerDuty 또는 기타 알림 서비스를 통해 알림을 보낼 수 있습니다.