//
//  RNConfig.m
//  MobileTestAlami
//
//  Created by Radi Rusadi on 04/10/22.
//

#import "RNConfig.h"

@implementation RNConfig

// To export a module named RNConfig
RCT_EXPORT_MODULE();

- (NSDictionary *)constantsToExport
{
  NSString *deviceId = UIDevice.currentDevice.identifierForVendor.UUIDString;
  return @{ @"deviceId": deviceId };
}

+ (BOOL)requiresMainQueueSetup
{
  return NO;
}

@end
