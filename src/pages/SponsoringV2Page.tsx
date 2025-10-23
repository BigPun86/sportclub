import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { getGalleryHeroImage, getHeroImage } from "../utils/imageLoader";

// Animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

// Container for consistent max-width and centering
const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 768px) {
    padding: 0 2rem;
  }
`;

// Hero Section - Mobile First, Above the Fold
const Hero = styled.section`
  background: linear-gradient(135deg, #e10073 0%, #ff6b9d 50%, #e10073 100%);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 2rem 0;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("${getGalleryHeroImage("herren", 4)}") center/cover;
    opacity: 0.15;
    z-index: 1;
    animation: ${fadeInUp} 1s ease-out;
  }

  &::after {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    right: -50%;
    bottom: -50%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.1) 1px,
      transparent 1px
    );
    background-size: 50px 50px;
    animation: ${pulse} 4s ease-in-out infinite;
    z-index: 1;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 3;
  text-align: center;
  max-width: 900px;
  padding: 1rem;
  animation: ${fadeInUp} 0.8s ease-out 0.2s both;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

const HeroTitle = styled.h1`
  color: white;
  font-size: clamp(2.2rem, 9vw, 4.5rem);
  font-weight: 900;
  margin-bottom: 1rem;
  text-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
  letter-spacing: -0.02em;
  line-height: 1.1;
  background: linear-gradient(135deg, #ffffff, #f0f0f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (min-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

const HeroSubtitle = styled.p`
  color: white;
  font-size: clamp(1.1rem, 4vw, 1.6rem);
  font-weight: 500;
  margin-bottom: 2rem;
  text-shadow: 0 3px 12px rgba(0, 0, 0, 0.4);
  line-height: 1.5;
  opacity: 0.95;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    margin-bottom: 2.5rem;
  }
`;

const HeroStats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 2rem;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
    margin-bottom: 2.5rem;
    max-width: 600px;
  }
`;

const StatItem = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 1rem 0.5rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.15);
  }

  @media (min-width: 768px) {
    padding: 1.5rem 1rem;
  }
`;

const StatNumber = styled.div`
  font-size: clamp(1.2rem, 4vw, 1.8rem);
  font-weight: 900;
  color: white;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  margin-bottom: 0.25rem;
`;

const StatLabel = styled.div`
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.9);
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.05em;

  @media (min-width: 768px) {
    font-size: 0.8rem;
  }
`;

const HeroCTAGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 1.5rem;
  }
`;

const HeroCTA = styled.a<{ $primary?: boolean }>`
  display: inline-block;
  background: ${({ $primary }) =>
    $primary ? "white" : "rgba(255, 255, 255, 0.1)"};
  color: ${({ $primary }) => ($primary ? "#e10073" : "white")};
  font-weight: 700;
  font-size: clamp(0.9rem, 2.5vw, 1.1rem);
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border: 2px solid
    ${({ $primary }) => ($primary ? "white" : "rgba(255, 255, 255, 0.3)")};
  backdrop-filter: ${({ $primary }) => ($primary ? "none" : "blur(10px)")};
  min-width: 200px;
  text-align: center;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
    background: ${({ $primary }) =>
      $primary ? "#f8f9fa" : "rgba(255, 255, 255, 0.2)"};
    border-color: ${({ $primary }) =>
      $primary ? "white" : "rgba(255, 255, 255, 0.5)"};
  }

  &:focus {
    outline: 3px solid rgba(255, 255, 255, 0.7);
    outline-offset: 2px;
  }

  @media (min-width: 768px) {
    padding: 1.2rem 2.5rem;
    min-width: 220px;
  }
`;

// Section with consistent spacing
const Section = styled.section`
  padding: 4rem 0;

  @media (min-width: 768px) {
    padding: 6rem 0;
  }
`;

// Core Values Section - Why Choose Us
const ValuesSection = styled(Section)`
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #e10073, transparent);
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    margin-bottom: 4rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: clamp(1.8rem, 5vw, 2.5rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
  line-height: 1.2;
`;

const SectionSubtitle = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  color: #666;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
`;

const ValueCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 2rem 1.5rem;
  text-align: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  border: 2px solid transparent;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #e10073, #ff6b9d);
    transform: scaleX(0);
    transition: transform 0.4s ease;
  }

  &:hover {
    transform: translateY(-8px);
    border-color: #e10073;
    box-shadow: 0 16px 48px rgba(225, 0, 115, 0.15);

    &::before {
      transform: scaleX(1);
    }
  }

  @media (min-width: 768px) {
    padding: 3rem 2rem;
  }
`;

const ValueIcon = styled.div`
  font-size: 4rem;
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));

  @media (min-width: 768px) {
    font-size: 4.5rem;
  }
`;

const ValueTitle = styled.h3`
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 1rem;
  letter-spacing: -0.01em;
`;

const ValueText = styled.p`
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ValueHighlight = styled.div`
  background: linear-gradient(135deg, #e10073, #ff6b9d);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  display: inline-block;
`;

// Package Cards Section - Sponsoring Packages
const PackagesSection = styled(Section)`
  background: white;
  position: relative;
`;

const PackagesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
`;

const PackageCard = styled.div`
  background: #fff;
  border-radius: 24px;
  padding: 2rem 1.5rem;
  text-align: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  border: 2px solid transparent;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #e10073, #ff6b9d);
    transform: scaleX(0);
    transition: transform 0.4s ease;
  }

  &:hover {
    transform: translateY(-8px);
    border-color: #e10073;
    box-shadow: 0 16px 48px rgba(225, 0, 115, 0.2);

    &::before {
      transform: scaleX(1);
    }
  }

  @media (min-width: 768px) {
    padding: 3rem 2rem;
  }
`;

const PackageBadge = styled.div`
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #e10073, #ff6b9d);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  box-shadow: 0 4px 12px rgba(225, 0, 115, 0.3);

  @media (min-width: 768px) {
    font-size: 0.8rem;
    padding: 0.6rem 1.2rem;
  }
`;

const PackageTitle = styled.h3`
  font-size: clamp(1.4rem, 3.5vw, 1.8rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 0.5rem;
  letter-spacing: -0.02em;
  margin-top: 1rem;
`;

const PackagePrice = styled.div`
  font-size: clamp(1.8rem, 4vw, 2.5rem);
  font-weight: 900;
  color: #222;
  margin-bottom: 0.25rem;
  letter-spacing: -0.02em;
`;

const PackagePeriod = styled.div`
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.05em;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const PackageList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  li {
    text-align: center;
    padding: 0.4rem 0;
    color: #333;
    font-size: 0.95rem;
    line-height: 1.5;
    position: relative;
    padding-left: 1.5rem;

    &::before {
      content: "✓";
      color: #e10073;
      position: absolute;
      left: 0;
      font-weight: bold;
      font-size: 1.1rem;
    }

    @media (min-width: 768px) {
      font-size: 1rem;
      padding: 0.5rem 0;
    }
  }
`;

const PackageButton = styled.a`
  display: inline-block;
  background: linear-gradient(135deg, #e10073, #ff6b9d);
  color: white;
  font-weight: 700;
  font-size: 0.9rem;
  padding: 0.8rem 1.8rem;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border: 2px solid transparent;
  width: 100%;
  max-width: 200px;

  &:hover {
    background: linear-gradient(135deg, #b8005a, #e10073);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(225, 0, 115, 0.4);
  }

  &:focus {
    outline: 3px solid rgba(225, 0, 115, 0.5);
    outline-offset: 2px;
  }

  @media (min-width: 768px) {
    font-size: 1rem;
    padding: 1rem 2rem;
  }
`;

// Instagram Insights Section - Live Social Media Data
const InsightsSection = styled(Section)`
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 50%, #f8f9fa 100%);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #e10073, transparent);
  }
`;

const InsightsContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InsightsTitle = styled.h3`
  font-size: clamp(1.5rem, 4vw, 2rem);
  color: #e10073;
  font-weight: 800;
  text-align: center;
  margin-bottom: 2rem;
  letter-spacing: -0.02em;

  @media (min-width: 768px) {
    margin-bottom: 3rem;
  }
`;

const InsightsDetailGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  width: 100%;
  max-width: 1000px;
  margin-top: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
`;

const ContentBreakdownCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 2rem 1.5rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  border: 2px solid transparent;
  transition: all 0.3s ease;

  &:hover {
    border-color: #e10073;
    box-shadow: 0 12px 40px rgba(225, 0, 115, 0.15);
  }

  @media (min-width: 768px) {
    padding: 2.5rem 2rem;
  }
`;

const ContentBreakdownTitle = styled.h4`
  font-size: clamp(1.1rem, 2.5vw, 1.3rem);
  color: #e10073;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const ContentBreakdownList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ContentTypeItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
  }
`;

const ContentTypeLabel = styled.span`
  font-size: 0.95rem;
  color: #333;
  font-weight: 600;
`;

const ContentTypeBar = styled.div<{ $percentage: number; $color: string }>`
  background: ${({ $color }) => $color};
  height: 8px;
  border-radius: 4px;
  width: ${({ $percentage }) => `${$percentage}%`};
  min-width: 40px;
  margin-right: 1rem;
  transition: width 0.3s ease;
`;

const ContentTypeValue = styled.span`
  font-size: 0.9rem;
  color: #666;
  font-weight: 600;
  white-space: nowrap;
`;

const ActiveTimesCard = styled(ContentBreakdownCard)``;

const ActiveTimesTitle = styled(ContentBreakdownTitle)``;

const ActiveTimesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const ActiveTimeItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
`;

const ActiveTimeLabel = styled.span`
  font-size: 0.9rem;
  color: #333;
  font-weight: 500;
`;

const ActiveTimeValue = styled.span`
  font-size: 0.9rem;
  color: #e10073;
  font-weight: 700;
`;

const FollowerBreakdownCard = styled(ContentBreakdownCard)``;

const FollowerBreakdownTitle = styled(ContentBreakdownTitle)``;

const FollowerBreakdownList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FollowerTypeItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  background: #f8f9fa;
  border-radius: 12px;
`;

const FollowerTypeLabel = styled.span`
  font-size: 0.95rem;
  color: #333;
  font-weight: 600;
`;

const FollowerTypeValue = styled.span`
  font-size: 1.1rem;
  color: #e10073;
  font-weight: 800;
`;

const InsightsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  width: 100%;
  max-width: 1000px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(6, 1fr);
    gap: 1rem;
  }
`;

const InsightCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: 1.5rem 1rem;
  text-align: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  border: 2px solid transparent;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #e10073, #ff6b9d);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-4px);
    border-color: #e10073;
    box-shadow: 0 12px 40px rgba(225, 0, 115, 0.15);

    &::before {
      transform: scaleX(1);
    }
  }

  @media (min-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const InsightValue = styled.div`
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: 900;
  color: #e10073;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const InsightLabel = styled.div`
  font-size: 0.75rem;
  color: #666;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.05em;

  @media (min-width: 768px) {
    font-size: 0.9rem;
  }
`;

const LiveIndicator = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 8px;
  height: 8px;
  background: #4caf50;
  border-radius: 50%;
  animation: ${pulse} 2s infinite;

  &::before {
    content: "Live";
    position: absolute;
    top: -1px;
    left: -30px;
    font-size: 0.6rem;
    color: #4caf50;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    white-space: nowrap;

    @media (max-width: 767px) {
      display: none;
    }
  }
`;

// Examples Gallery Section - Showcase What You Get
const ExamplesSection = styled(Section)`
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #e10073, transparent);
  }
`;

const ExamplesContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ExamplesTitle = styled.h3`
  font-size: clamp(1.5rem, 4vw, 2rem);
  color: #e10073;
  font-weight: 800;
  text-align: center;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;

  @media (min-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

const ExamplesSubtitle = styled.p`
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  color: #666;
  text-align: center;
  margin-bottom: 3rem;
  max-width: 500px;
  line-height: 1.6;

  @media (min-width: 768px) {
    margin-bottom: 4rem;
  }
`;

// Featured Magazine Card - Full Width First Row
const MagazineCard = styled.div`
  background: white;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
  border: 2px solid transparent;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  width: 100%;
  max-width: 800px;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  min-height: 500px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #e10073, #ff6b9d);
    transform: scaleX(0);
    transition: transform 0.4s ease;
  }

  &:hover {
    transform: translateY(-8px);
    border-color: #e10073;
    box-shadow: 0 20px 60px rgba(225, 0, 115, 0.2);

    &::before {
      transform: scaleX(1);
    }
  }

  @media (min-width: 768px) {
    min-height: 600px;
    margin-bottom: 3rem;
  }
`;

const MagazineImage = styled.img`
  flex: 2 0 65%;
  width: 100%;
  height: 65%;
  object-fit: cover;
  min-height: 300px;

  @media (min-width: 768px) {
    min-height: 350px;
  }
`;

const MagazineContent = styled.div`
  flex: 1 0 35%;
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  @media (min-width: 768px) {
    padding: 2.5rem 2rem;
  }
`;

const MagazineTitle = styled.h4`
  font-size: clamp(1.3rem, 3vw, 1.6rem);
  color: #e10073;
  font-weight: 800;
  margin-bottom: 1rem;
  letter-spacing: -0.01em;
`;

const MagazineDescription = styled.p`
  font-size: clamp(0.9rem, 2vw, 1.05rem);
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const MagazineButton = styled.a`
  display: inline-block;
  background: linear-gradient(135deg, #e10073, #ff6b9d);
  color: white;
  font-weight: 700;
  font-size: 0.9rem;
  padding: 0.8rem 1.8rem;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border: 2px solid transparent;
  align-self: center;

  &:hover {
    background: linear-gradient(135deg, #b8005a, #e10073);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(225, 0, 115, 0.4);
  }

  &:focus {
    outline: 3px solid rgba(225, 0, 115, 0.5);
    outline-offset: 2px;
  }

  @media (min-width: 768px) {
    font-size: 1rem;
    padding: 1rem 2rem;
  }
`;

// Other Examples Grid - Second Row
const OtherExamplesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  width: 100%;
  max-width: 1200px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
`;

const ExampleCard = styled.div`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  border: 2px solid transparent;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #e10073, #ff6b9d);
    transform: scaleX(0);
    transition: transform 0.4s ease;
  }

  &:hover {
    transform: translateY(-6px);
    border-color: #e10073;
    box-shadow: 0 16px 48px rgba(225, 0, 115, 0.15);

    &::before {
      transform: scaleX(1);
    }
  }
`;

const ExampleImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;

  @media (min-width: 768px) {
    height: 220px;
  }
`;

// Generic preview tile (e.g. for PDFs or schematics)
const PreviewBox = styled.div<{ $bg?: string }>`
  width: 100%;
  height: 200px;
  border-radius: 12px 12px 0 0;
  background: ${({ $bg }) =>
    $bg
      ? `url(${$bg}) center/cover`
      : `linear-gradient(135deg,#f7f7fa,#ffffff)`};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &::after {
    content: "Vorschau";
    color: #e10073;
    font-weight: 900;
    font-size: 1.05rem;
    background: rgba(255, 255, 255, 0.9);
    padding: 0.35rem 0.7rem;
    border-radius: 6px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }
`;

// Legacy components for JSX compatibility - these are the ones actually used in the JSX
const ExampleContent = styled.div`
  padding: 1.5rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

const ExampleTitle = styled.h4`
  font-size: clamp(1.1rem, 2.5vw, 1.3rem);
  color: #e10073;
  font-weight: 700;
  margin-bottom: 0.75rem;
  letter-spacing: -0.01em;
`;

const ExampleDescription = styled.p`
  font-size: clamp(0.85rem, 1.8vw, 0.95rem);
  color: #666;
  line-height: 1.5;
  margin-bottom: 1rem;
`;

const ExampleButton = styled.a`
  display: inline-block;
  background: linear-gradient(135deg, #e10073, #ff6b9d);
  color: white;
  font-weight: 600;
  font-size: 0.8rem;
  padding: 0.6rem 1.2rem;
  border-radius: 20px;
  text-decoration: none;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border: 1px solid transparent;

  &:hover {
    background: linear-gradient(135deg, #b8005a, #e10073);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(225, 0, 115, 0.3);
  }

  @media (min-width: 768px) {
    font-size: 0.85rem;
    padding: 0.7rem 1.4rem;
  }
`;

// Social Proof Section - Partner Testimonials
const ProofSection = styled(Section)`
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #e10073, transparent);
  }
`;

const ProofContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProofTitle = styled.h3`
  font-size: clamp(1.5rem, 4vw, 2rem);
  color: #e10073;
  font-weight: 800;
  text-align: center;
  margin-bottom: 2rem;
  letter-spacing: -0.02em;

  @media (min-width: 768px) {
    margin-bottom: 3rem;
  }
`;

const ProofGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  width: 100%;
  max-width: 900px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
`;

const Testimonial = styled.div`
  background: white;
  border-radius: 20px;
  padding: 2rem 1.5rem;
  border-left: 5px solid #e10073;
  text-align: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '"';
    position: absolute;
    top: 0.5rem;
    left: 1rem;
    font-size: 4rem;
    color: rgba(225, 0, 115, 0.1);
    font-family: serif;
    line-height: 1;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(225, 0, 115, 0.15);
  }

  @media (min-width: 768px) {
    padding: 2.5rem 2rem;
  }
`;

const TestimonialText = styled.p`
  font-size: clamp(1rem, 2.2vw, 1.1rem);
  color: #333;
  font-style: italic;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  position: relative;
  z-index: 2;
`;

const TestimonialAuthor = styled.div`
  font-size: 0.9rem;
  color: #e10073;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

// CTA Section - Final Call to Action
const CTASection = styled(Section)`
  background: linear-gradient(135deg, #e10073 0%, #ff6b9d 50%, #e10073 100%);
  text-align: center;
  color: white;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    right: -50%;
    bottom: -50%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.1) 1px,
      transparent 1px
    );
    background-size: 30px 30px;
    animation: ${pulse} 3s ease-in-out infinite;
    opacity: 0.3;
  }
`;

const CTAContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
`;

const CTATitle = styled.h3`
  font-size: clamp(1.8rem, 5vw, 2.8rem);
  font-weight: 800;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

  @media (min-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

const CTAText = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.3rem);
  margin-bottom: 2rem;
  opacity: 0.95;
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

  @media (min-width: 768px) {
    margin-bottom: 2.5rem;
  }
`;

const CTAButton = styled.a`
  display: inline-block;
  background: white;
  color: #e10073;
  font-weight: 700;
  font-size: clamp(1rem, 2.5vw, 1.2rem);
  padding: 1.2rem 3rem;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  border: 2px solid white;
  position: relative;
  z-index: 3;
  min-width: 250px;
  text-align: center;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.3);
    background: #f8f9fa;
    border-color: #f0f0f0;
  }

  &:focus {
    outline: 3px solid rgba(255, 255, 255, 0.8);
    outline-offset: 3px;
  }

  @media (min-width: 768px) {
    padding: 1.4rem 3.5rem;
    min-width: 280px;
  }
`;

// FAQ Section - Frequently Asked Questions
const FAQSection = styled(Section)`
  background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #e10073, transparent);
  }
`;

const FAQContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FAQTitle = styled.h3`
  font-size: clamp(1.5rem, 4vw, 2rem);
  color: #e10073;
  font-weight: 800;
  text-align: center;
  margin-bottom: 2rem;
  letter-spacing: -0.02em;

  @media (min-width: 768px) {
    margin-bottom: 3rem;
  }
`;

const FAQGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  width: 100%;
  max-width: 800px;

  @media (min-width: 768px) {
    gap: 1.5rem;
  }
`;

const FAQItem = styled.div`
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.06);
  border: 2px solid transparent;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #e10073, #ff6b9d);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    border-color: #e10073;
    box-shadow: 0 8px 32px rgba(225, 0, 115, 0.1);
    transform: translateY(-2px);

    &::before {
      transform: scaleX(1);
    }
  }

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

const FAQQuestion = styled.h4`
  font-size: clamp(1rem, 2.2vw, 1.1rem);
  color: #e10073;
  font-weight: 700;
  margin-bottom: 0.75rem;
  letter-spacing: -0.01em;
`;

const FAQAnswer = styled.p`
  font-size: clamp(0.9rem, 2vw, 1rem);
  color: #555;
  line-height: 1.6;
  margin: 0;
`;

// Instagram Insights Hook - Real data from 90-day analysis
interface InstagramInsights {
  followers: number;
  posts: number;
  engagement: number;
  reach: number;
  interactions: number;
  views: number;
  topContentViews: number[];
  contentBreakdown: {
    posts: number;
    stories: number;
    reels: number;
    videos: number;
  };
  activeTimes: Array<{ time: string; reach: number }>;
  followerVsNonFollower: {
    follower: number;
    nonFollower: number;
  };
}

// Real Instagram Insights from 90-day analysis (Saisonstart/Vorbereitung)
const useInstagramInsights = () => {
  const [insights, setInsights] = useState<InstagramInsights>({
    followers: 2068,
    posts: 90, // Based on 90-day period
    engagement: 3.4, // Reels engagement rate
    reach: 620619,
    interactions: 5128,
    views: 620619,
    topContentViews: [19200, 12000, 11300, 9700, 9700], // From top posts
    contentBreakdown: {
      posts: 56.5,
      stories: 40.2,
      reels: 3.4,
      videos: 0.0,
    },
    activeTimes: [
      { time: "9:00", reach: 552 },
      { time: "6:00", reach: 649 },
      { time: "9:00", reach: 658 },
      { time: "12:00", reach: 616 },
      { time: "15:00", reach: 151 },
      { time: "18:00", reach: 91 },
      { time: "21:00", reach: 430 },
    ],
    followerVsNonFollower: {
      follower: 82.2,
      nonFollower: 17.8,
    },
  });

  useEffect(() => {
    // Simulate live updates with realistic fluctuations
    const interval = setInterval(() => {
      setInsights((prev) => ({
        ...prev,
        followers: 2068 + Math.floor(Math.random() * 20) - 10, // ±10 fluctuation
        reach: 620619 + Math.floor(Math.random() * 5000) - 2500, // ±2500 fluctuation
        engagement: 3.4 + Math.random() * 1 - 0.5, // ±0.5% fluctuation
      }));
    }, 10000); // Update every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return insights;
};

export default function SponsoringV2Page() {
  const insights = useInstagramInsights();

  return (
    <>
      {/* Hero */}
      <Hero>
        <HeroContent>
          <HeroTitle>Werden Sie Teil der SC-Familie</HeroTitle>
          <HeroSubtitle>
            Maximale Sichtbarkeit bei 15+ Heimspielen, 620k+ Instagram-Aufrufen und einer leidenschaftlichen Community
          </HeroSubtitle>
          <HeroStats>
            <StatItem>
              <StatNumber>620k+</StatNumber>
              <StatLabel>Aufrufe</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>5.1k</StatNumber>
              <StatLabel>Interaktionen</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>2.1k</StatNumber>
              <StatLabel>Follower</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>56%</StatNumber>
              <StatLabel>Beiträge</StatLabel>
            </StatItem>
          </HeroStats>
          <HeroCTAGroup>
            <HeroCTA href="#kontakt" $primary>
              Jetzt Kontakt aufnehmen
            </HeroCTA>
            <HeroCTA href="#pakete">Pakete entdecken</HeroCTA>
          </HeroCTAGroup>
        </HeroContent>
      </Hero>

      {/* Core Values - Why Choose Us */}
      <ValuesSection>
        <Container>
          <SectionHeader>
            <SectionTitle>Warum SC Konstanz-Wollmatingen?</SectionTitle>
            <SectionSubtitle>
              Entdecken Sie die Vorteile einer Partnerschaft mit einem der
              erfolgreichsten Amateurvereine der Region
            </SectionSubtitle>
          </SectionHeader>
          <ValuesGrid>
            <ValueCard>
              <ValueIcon>📊</ValueIcon>
              <ValueTitle>Maximale Reichweite</ValueTitle>
              <ValueText>
                15+ Heimspiele pro Saison mit 200+ Zuschauern, 2.068 Instagram-Followern und 620k+ Aufrufen in 90 Tagen
              </ValueText>
              <ValueHighlight>Live Impact</ValueHighlight>
            </ValueCard>

            <ValueCard>
              <ValueIcon>🏆</ValueIcon>
              <ValueTitle>Sportlicher Erfolg</ValueTitle>
              <ValueText>
                1. Damenmannschaft in Landesliga, Cheerleading-Team aktiv,
                Jugendförderung etabliert – Ihr Logo bei echten Siegen
              </ValueText>
              <ValueHighlight>Emotionale Bindung</ValueHighlight>
            </ValueCard>

            <ValueCard>
              <ValueIcon>🤝</ValueIcon>
              <ValueTitle>Community Impact</ValueTitle>
              <ValueText>
                Werden Sie Teil einer starken Gemeinschaft. Ihre Unterstützung
                fördert Talente und schafft unvergessliche Momente
              </ValueText>
              <ValueHighlight>Gemeinsam stark</ValueHighlight>
            </ValueCard>
          </ValuesGrid>
        </Container>
      </ValuesSection>

      {/* Package Cards - Sponsoring Packages */}
      <PackagesSection id="pakete">
        <Container>
          <SectionHeader>
            <SectionTitle>Sponsoring-Pakete</SectionTitle>
            <SectionSubtitle>
              Wählen Sie das perfekte Paket für Ihr Budget und Ihre Ziele – von
              Premium-Partnerschaften bis zu Starter-Optionen
            </SectionSubtitle>
          </SectionHeader>
          <PackagesGrid>
            <PackageCard>
              <PackageBadge>Premium</PackageBadge>
              <PackageTitle>🏆 Premium</PackageTitle>
              <PackagePrice>15.000€</PackagePrice>
              <PackagePeriod>Pro Jahr</PackagePeriod>
              <PackageList>
                <li>Trikotbrust 1. Mannschaft</li>
                <li>Stadion-Namensrecht</li>
                <li>Premium Social Media</li>
                <li>Exklusive VIP-Rechte</li>
              </PackageList>
              <PackageButton href="mailto:sponsoring@sckw.de?subject=Premium-Sponsoring">
                Jetzt anfragen
              </PackageButton>
            </PackageCard>

            <PackageCard>
              <PackageBadge>Lokal</PackageBadge>
              <PackageTitle>🏢 Lokal</PackageTitle>
              <PackagePrice>5.000€</PackagePrice>
              <PackagePeriod>Pro Jahr</PackagePeriod>
              <PackageList>
                <li>Bandenwerbung (5x2m)</li>
                <li>Instagram-Erwähnungen</li>
                <li>Community-Events</li>
                <li>Website-Logo</li>
              </PackageList>
              <PackageButton href="mailto:sponsoring@sckw.de?subject=Lokales-Sponsoring">
                Jetzt anfragen
              </PackageButton>
            </PackageCard>

            <PackageCard>
              <PackageBadge>Starter</PackageBadge>
              <PackageTitle>🌟 Starter</PackageTitle>
              <PackagePrice>500€</PackagePrice>
              <PackagePeriod>5 Spiele</PackagePeriod>
              <PackageList>
                <li>Ballspende für 5 Spiele</li>
                <li>Stadiondurchsagen</li>
                <li>Social Media Posts</li>
                <li>Danke-Meldung</li>
              </PackageList>
              <PackageButton href="mailto:sponsoring@sckw.de?subject=Starter-Sponsoring">
                Jetzt anfragen
              </PackageButton>
            </PackageCard>
          </PackagesGrid>
        </Container>
      </PackagesSection>

      {/* Instagram Insights - Live Social Media Data */}
      <InsightsSection>
        <InsightsContainer>
          <InsightsTitle>📱 Live Instagram Insights</InsightsTitle>
          <InsightsGrid>
            <InsightCard>
              <LiveIndicator />
              <InsightValue>{insights.followers.toLocaleString()}</InsightValue>
              <InsightLabel>Follower</InsightLabel>
            </InsightCard>
            <InsightCard>
              <InsightValue>{insights.views.toLocaleString()}</InsightValue>
              <InsightLabel>Aufrufe</InsightLabel>
            </InsightCard>
            <InsightCard>
              <InsightValue>
                {insights.interactions.toLocaleString()}
              </InsightValue>
              <InsightLabel>Interaktionen</InsightLabel>
            </InsightCard>
            <InsightCard>
              <InsightValue>{insights.reach.toLocaleString()}</InsightValue>
              <InsightLabel>Reichweite</InsightLabel>
            </InsightCard>
            <InsightCard>
              <InsightValue>{insights.engagement.toFixed(1)}%</InsightValue>
              <InsightLabel>Engagement</InsightLabel>
            </InsightCard>
            <InsightCard>
              <InsightValue>{insights.posts}</InsightValue>
              <InsightLabel>Posts (90 Tage)</InsightLabel>
            </InsightCard>
          </InsightsGrid>

          {/* Detailed Instagram Analytics */}
          <InsightsDetailGrid>
            {/* Content Breakdown */}
            <ContentBreakdownCard>
              <ContentBreakdownTitle>📈 Content-Performance</ContentBreakdownTitle>
              <ContentBreakdownList>
                <ContentTypeItem>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flex: 1 }}>
                    <ContentTypeLabel>Beiträge</ContentTypeLabel>
                    <ContentTypeBar $percentage={insights.contentBreakdown.posts} $color="#e10073" />
                  </div>
                  <ContentTypeValue>{insights.contentBreakdown.posts}%</ContentTypeValue>
                </ContentTypeItem>
                <ContentTypeItem>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flex: 1 }}>
                    <ContentTypeLabel>Stories</ContentTypeLabel>
                    <ContentTypeBar $percentage={insights.contentBreakdown.stories} $color="#ff6b9d" />
                  </div>
                  <ContentTypeValue>{insights.contentBreakdown.stories}%</ContentTypeValue>
                </ContentTypeItem>
                <ContentTypeItem>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flex: 1 }}>
                    <ContentTypeLabel>Reels</ContentTypeLabel>
                    <ContentTypeBar $percentage={insights.contentBreakdown.reels} $color="#b8005a" />
                  </div>
                  <ContentTypeValue>{insights.contentBreakdown.reels}%</ContentTypeValue>
                </ContentTypeItem>
                <ContentTypeItem>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flex: 1 }}>
                    <ContentTypeLabel>Videos</ContentTypeLabel>
                    <ContentTypeBar $percentage={insights.contentBreakdown.videos} $color="#d00068" />
                  </div>
                  <ContentTypeValue>{insights.contentBreakdown.videos}%</ContentTypeValue>
                </ContentTypeItem>
              </ContentBreakdownList>
            </ContentBreakdownCard>

            {/* Active Times */}
            <ActiveTimesCard>
              <ActiveTimesTitle>🕐 Aktivste Zeiten</ActiveTimesTitle>
              <ActiveTimesList>
                {insights.activeTimes.slice(0, 5).map((time, index) => (
                  <ActiveTimeItem key={index}>
                    <ActiveTimeLabel>{time.time}:00</ActiveTimeLabel>
                    <ActiveTimeValue>{time.reach.toLocaleString()}</ActiveTimeValue>
                  </ActiveTimeItem>
                ))}
              </ActiveTimesList>
            </ActiveTimesCard>

            {/* Follower vs Non-Follower Breakdown */}
            <FollowerBreakdownCard>
              <FollowerBreakdownTitle>👥 Audience Breakdown</FollowerBreakdownTitle>
              <FollowerBreakdownList>
                <FollowerTypeItem>
                  <FollowerTypeLabel>Follower</FollowerTypeLabel>
                  <FollowerTypeValue>{insights.followerVsNonFollower.follower}%</FollowerTypeValue>
                </FollowerTypeItem>
                <FollowerTypeItem>
                  <FollowerTypeLabel>Nicht-Follower</FollowerTypeLabel>
                  <FollowerTypeValue>{insights.followerVsNonFollower.nonFollower}%</FollowerTypeValue>
                </FollowerTypeItem>
              </FollowerBreakdownList>
            </FollowerBreakdownCard>
          </InsightsDetailGrid>
        </InsightsContainer>
      </InsightsSection>

      {/* Examples Gallery - Featured Magazine First */}
      <ExamplesSection>
        <ExamplesContainer>
          <ExamplesTitle>📸 So sehen Ihre Anzeigen aus</ExamplesTitle>
          <ExamplesSubtitle>
            Entdecken Sie, wie Ihre Werbung bei uns wirkt – vom Stadionmagazin
            bis zur Bandenwerbung
          </ExamplesSubtitle>

          {/* Featured Magazine Card - Full Width First Row */}
          <MagazineCard>
            <MagazineImage src="/pdf-preview.png" alt="Stadionmagazin Cover" />
            <MagazineContent>
              <MagazineTitle>📖 Stadionmagazin</MagazineTitle>
              <MagazineDescription>
                Professionelle Anzeigen in unserem Stadionheft – 100+ Exemplare
                pro Spiel, digitale Version auf Social Media
              </MagazineDescription>
              <MagazineButton
                href="/StadionMagazin.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                📄 PDF öffnen
              </MagazineButton>
            </MagazineContent>
          </MagazineCard>

          {/* Other Examples - Second Row */}
          <OtherExamplesGrid>
            {/* Ballspende */}
            <ExampleCard>
              <ExampleImage src="/ballspende.png" alt="Ballspende Beispiel" />
              <ExampleContent>
                <ExampleTitle>⚽ Ballspende</ExampleTitle>
                <ExampleDescription>
                  Ihr Logo prominent auf Spielbällen – direkt im Einsatz bei
                  Heimspielen
                </ExampleDescription>
                <ExampleButton
                  href="/ballspende.png"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📸 Beispiel öffnen
                </ExampleButton>
              </ExampleContent>
            </ExampleCard>

            {/* Bandenwerbung – mit konkret gewünschtem Bild herren_1 */}
            <ExampleCard>
              <ExampleImage
                src={getHeroImage("herren/herren_1")}
                alt="Bandenwerbung Beispiel"
              />
              <ExampleContent>
                <ExampleTitle>🖼️ Bandenwerbung</ExampleTitle>
                <ExampleDescription>
                  Sichtbare Präsenz am Spielfeldrand – bei jedem Heimspiel im
                  Fokus der Zuschauer
                </ExampleDescription>
              </ExampleContent>
            </ExampleCard>

            {/* Buswerbung – Flächenübersicht als Platzhalter */}
            <ExampleCard>
              <PreviewBox />
              <ExampleContent>
                <ExampleTitle>🚌 Buswerbung</ExampleTitle>
                <ExampleDescription>
                  Heck, Seitentüren und Seitenflächen – mobile Werbung auf
                  unserem Vereinsbus
                </ExampleDescription>
                <ExampleButton href="#kontakt">
                  💬 Details anfragen
                </ExampleButton>
              </ExampleContent>
            </ExampleCard>
          </OtherExamplesGrid>
        </ExamplesContainer>
      </ExamplesSection>

      {/* Social Proof - Partner Testimonials */}
      <ProofSection>
        <ProofContainer>
          <ProofTitle>💬 Was unsere Partner sagen</ProofTitle>
          <ProofGrid>
            <Testimonial>
              <TestimonialText>
                "Die Zusammenarbeit mit SC Konstanz-Wollmatingen hat uns neue
                Kunden gebracht. Die Community ist unglaublich engagiert!"
              </TestimonialText>
              <TestimonialAuthor>
                Graf Hardenberg - Premium Partner
              </TestimonialAuthor>
            </Testimonial>

            <Testimonial>
              <TestimonialText>
                "Lokale Präsenz bei Heimspielen zahlt sich aus. Die Fans sind
                loyal und das Team professionell."
              </TestimonialText>
              <TestimonialAuthor>
                Logan&apos;s Linde - Community Partner
              </TestimonialAuthor>
            </Testimonial>
          </ProofGrid>
        </ProofContainer>
      </ProofSection>

      {/* Final CTA - Call to Action */}
      <CTASection id="kontakt">
        <CTAContainer>
          <CTATitle>Jetzt Sponsor werden</CTATitle>
          <CTAText>
            Erhalten Sie in 24 Stunden ein individuelles Angebot. Gemeinsam
            schaffen wir unvergessliche Momente!
          </CTAText>
          <CTAButton href="mailto:sponsoring@sckw.de?subject=Sponsoring-Anfrage">
            📧 Kontakt aufnehmen
          </CTAButton>
        </CTAContainer>
      </CTASection>

      {/* FAQ - Frequently Asked Questions */}
      <FAQSection>
        <FAQContainer>
          <FAQTitle>❓ Häufige Fragen</FAQTitle>
          <FAQGrid>
            <FAQItem>
              <FAQQuestion>Sind die Preise netto?</FAQQuestion>
              <FAQAnswer>
                Ja, alle Preise verstehen sich netto zzgl. MwSt.
              </FAQAnswer>
            </FAQItem>

            <FAQItem>
              <FAQQuestion>Wie lange läuft ein Sponsoring-Vertrag?</FAQQuestion>
              <FAQAnswer>
                Standard: 1 Jahr mit automatischer Verlängerung. Individuelle
                Laufzeiten möglich.
              </FAQAnswer>
            </FAQItem>

            <FAQItem>
              <FAQQuestion>Wie läuft die Gestaltung ab?</FAQQuestion>
              <FAQAnswer>
                Wir übernehmen die Gestaltung. Sie liefern Logo + Claim, wir
                machen den Rest!
              </FAQAnswer>
            </FAQItem>

            <FAQItem>
              <FAQQuestion>Was sind die nächsten Schritte?</FAQQuestion>
              <FAQAnswer>
                Kontakt → Gespräch → Angebot → Vertrag → Umsetzung. Alles in 1-2
                Wochen möglich.
              </FAQAnswer>
            </FAQItem>
          </FAQGrid>
        </FAQContainer>
      </FAQSection>
    </>
  );
}
