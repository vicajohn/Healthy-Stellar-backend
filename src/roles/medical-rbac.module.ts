import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicalRbacController } from './medical-rbac.controller';
import { EmergencyOverride } from '../entities/emergency-override.entity';
import { MedicalAuditLog } from '../entities/medical-audit-log.entity';
import { MedicalRbacGuard } from './medical-rbac.guard';
import { EmergencyOverrideService } from './emergency-override.service';
import { MedicalAuditService } from './medical-audit.service';
import { MedicalPermissionsService } from './medical-permissions.service';

@Module({
  imports: [TypeOrmModule.forFeature([MedicalAuditLog, EmergencyOverride])],
  controllers: [MedicalRbacController],
  providers: [
    MedicalPermissionsService,
    MedicalAuditService,
    EmergencyOverrideService,
    MedicalRbacGuard,
  ],
  exports: [
    MedicalPermissionsService,
    MedicalAuditService,
    EmergencyOverrideService,
    MedicalRbacGuard,
  ],
})
export class MedicalRbacModule {}
