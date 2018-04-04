//
//  ViewController.m
//  ZZRNDemo
//
//  Created by 相颖 on 2018/4/4.
//  Copyright © 2018年 kun. All rights reserved.
//

#import "ViewController.h"
#import "React01.h"
#import "React02.h"
#import "React03.h"
#import "React04.h"


@interface ViewController ()

@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
}


- (IBAction)jumpToVC:(UIButton *)sender {
    switch (sender.tag) {
        case 1:
            [self.navigationController pushViewController:[React01 new] animated:true];
            break;
        case 2:
            [self.navigationController pushViewController:[React02 new] animated:true];
            break;
        case 3:
            [self.navigationController pushViewController:[React03 new] animated:true];
            break;
        case 4:
            [self.navigationController pushViewController:[React04 new] animated:true];
            break;
        default:
            break;
    }
}


@end
