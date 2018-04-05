//
//  ReactViewController.m
//  NamiboxRN
//
//  Created by zhaokun on 2018/4/4.
//  Copyright © 2018年 zhaokun. All rights reserved.
//

#import "ReactViewController.h"
#import <React/RCTRootView.h>


@interface ReactViewController ()

@end

@implementation ReactViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
    NSString * strUrl = [NSString stringWithFormat:@"http://localhost:8081/%@.bundle?platform=ios&dev=true", self.jsName];
    
    NSURL * jsCodeLocation = [NSURL URLWithString:strUrl];
    
    RCTRootView * rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                         moduleName:@"ZZRNDemo"
                                                  initialProperties:nil
                                                      launchOptions:nil];
    self.view = rootView;
}


@end
