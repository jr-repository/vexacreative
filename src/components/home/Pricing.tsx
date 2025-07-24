
import React, { useState } from 'react';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import AnimationWrapper from '../AnimationWrapper';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible';

const Pricing = () => {
  const [expandedCards, setExpandedCards] = useState<{[key: number]: boolean}>({});

  const toggleCard = (index: number) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const plans = [
    {
      name: 'Social Media Management',
      price: '750',
      period: 'month',
      description: 'Social Media platform setup & alignment',
      features: [
        'Up to 12 curated feed posts / month',
        'Caption writing in English or bilingual (ENG/ID)',
        'Hashtag strategy',
        'Content scheduling',
        'Monthly performance insights',
        'Visual layout planning'
      ],
      popular: true
    },
    {
      name: 'Content Creation Package',
      price: '950',
      period: 'session',
      description: 'Visual content that elevates your brand and attracts your audience.',
      features: [
        '1 shooting session (photo & video)',
        'Reels/TikTok edits (up to 3 short-form videos)',
        '10+ edited photos',
        'Direction & styling assistance',
        'Delivered within 5 working days'
      ],
      popular: false
    },
    {
      name: 'Digital Marketing (Ads Management)',
      price: '1,000',
      period: 'month',
      description: 'Reach more people. Convert smarter. Pay only for what works.',
      features: [
        'Meta Ads (IG & Facebook) setup',
        'Targeting & audience strategy',
        'Ad copywriting',
        'Weekly performance reporting',
        'Basic budget guidance'
      ],
      popular: false
    },
    {
      name: 'Website Design & Development',
      price: '1,200',
      period: 'project',
      description: 'Simple, modern websites built to convert — fast.',
      features: [
        'Custom responsive design',
        'Up to 5 pages',
        'Copywriting support',
        'Email Business',
        'Basic SEO setup',
        '1 revision round'
      ],
      popular: false
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <AnimationWrapper>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-gray-900 mb-4">
              Choose Your Growth Package
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible plans designed to scale with your business growth.
            </p>
          </div>
        </AnimationWrapper>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <AnimationWrapper key={index} animation="fade-in">
              <div className={`bg-white rounded-3xl p-6 shadow-lg border border-gray-100 transition-all duration-300 h-full flex flex-col relative ${
                plan.popular 
                  ? 'ring-2 ring-vexa-purple scale-105 shadow-xl bg-gradient-to-br from-vexa-purple/5 via-vexa-blue/5 to-vexa-cyan/5' 
                  : 'hover:shadow-xl hover:scale-105 hover:bg-gradient-to-br hover:from-vexa-purple/5 hover:via-vexa-blue/5 hover:to-vexa-cyan/5'
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-vexa-gradient text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-lg font-playfair font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center mb-3">
                    <span className="text-sm text-gray-500">Start from</span>
                  </div>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-2xl font-bold vexa-gradient-text">
                      AED {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-gray-600 ml-1 text-sm">/{plan.period}</span>
                    )}
                  </div>
                  <p className="text-gray-600 text-sm">{plan.description}</p>
                </div>

                <div className="space-y-3 flex-1 mb-6">
                  {plan.features.slice(0, 4).map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-vexa-purple mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                  
                  {plan.features.length > 4 && (
                    <div className="flex justify-center mt-4">
                      <Collapsible open={expandedCards[index]} onOpenChange={() => toggleCard(index)}>
                        <CollapsibleTrigger className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-vexa-purple to-vexa-blue hover:from-vexa-blue hover:to-vexa-cyan transition-all duration-300 text-white shadow-lg hover:shadow-xl transform hover:scale-105">
                          {expandedCards[index] ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </CollapsibleTrigger>
                        <CollapsibleContent className="space-y-3 mt-4">
                          {plan.features.slice(4).map((feature, idx) => (
                            <div key={idx + 4} className="flex items-start gap-2">
                              <Check className="w-4 h-4 text-vexa-purple mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">{feature}</span>
                            </div>
                          ))}
                          <div className="flex items-start gap-2 pt-2 border-t border-gray-100">
                            <Check className="w-4 h-4 text-vexa-purple mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 text-sm font-medium">Packages are fully customizable</span>
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    </div>
                  )}
                </div>

                <a 
                  href="mailto:hello@vexacreative.net"
                  className={`w-full mt-auto block text-center ${
                    plan.popular 
                      ? 'vexa-btn' 
                      : 'bg-gray-100 hover:bg-vexa-gradient hover:text-white text-gray-700 font-semibold py-2 px-6 rounded-full transition-all duration-300'
                  }`}
                >
                  Get Started
                </a>
              </div>
            </AnimationWrapper>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden px-4">
          <Carousel className="w-full max-w-sm mx-auto">
            <CarouselContent className="ml-0">
              {plans.map((plan, index) => (
                <CarouselItem key={index}>
                  <div className="p-1 pt-6">
                    <div className={`bg-white rounded-3xl p-6 shadow-lg border border-gray-100 transition-all duration-300 h-full flex flex-col relative ${
                      plan.popular 
                        ? 'ring-2 ring-vexa-purple shadow-xl bg-gradient-to-br from-vexa-purple/5 via-vexa-blue/5 to-vexa-cyan/5' 
                        : ''
                    }`}>
                      {plan.popular && (
                        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                          <span className="bg-vexa-gradient text-white px-4 py-2 rounded-full text-sm font-semibold">
                            Most Popular
                          </span>
                        </div>
                      )}

                      <div className="text-center mb-6 pt-2">
                        <h3 className="text-xl font-playfair font-bold text-gray-900 mb-2">
                          {plan.name}
                        </h3>
                        <div className="flex items-baseline justify-center mb-3">
                          <span className="text-sm text-gray-500">Start from</span>
                        </div>
                        <div className="flex items-baseline justify-center mb-4">
                          <span className="text-3xl font-bold vexa-gradient-text">
                            AED {plan.price}
                          </span>
                          {plan.period && (
                            <span className="text-gray-600 ml-2">/{plan.period}</span>
                          )}
                        </div>
                        <p className="text-gray-600">{plan.description}</p>
                      </div>

                      <div className="space-y-4 flex-1 mb-6">
                        {plan.features.slice(0, 4).map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-vexa-purple mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                        
                        {plan.features.length > 4 && (
                          <div className="flex justify-center mt-4">
                            <Collapsible open={expandedCards[index]} onOpenChange={() => toggleCard(index)}>
                              <CollapsibleTrigger className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-vexa-purple to-vexa-blue hover:from-vexa-blue hover:to-vexa-cyan transition-all duration-300 text-white shadow-lg hover:shadow-xl transform hover:scale-105">
                                {expandedCards[index] ? (
                                  <ChevronUp className="w-5 h-5" />
                                ) : (
                                  <ChevronDown className="w-5 h-5" />
                                )}
                              </CollapsibleTrigger>
                              <CollapsibleContent className="space-y-4 mt-4">
                                {plan.features.slice(4).map((feature, idx) => (
                                  <div key={idx + 4} className="flex items-start gap-3">
                                    <Check className="w-5 h-5 text-vexa-purple mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700">{feature}</span>
                                  </div>
                                ))}
                                <div className="flex items-start gap-3 pt-2 border-t border-gray-100">
                                  <Check className="w-5 h-5 text-vexa-purple mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-700 font-medium">Packages are fully customizable</span>
                                </div>
                              </CollapsibleContent>
                            </Collapsible>
                          </div>
                        )}
                      </div>

                      <a 
                        href="mailto:hello@vexacreative.net"
                        className={`w-full mt-auto block text-center ${
                          plan.popular 
                            ? 'vexa-btn' 
                            : 'bg-gray-100 hover:bg-vexa-gradient hover:text-white text-gray-700 font-semibold py-2 px-6 rounded-full transition-all duration-300'
                        }`}
                      >
                        Get Started
                      </a>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Pricing;